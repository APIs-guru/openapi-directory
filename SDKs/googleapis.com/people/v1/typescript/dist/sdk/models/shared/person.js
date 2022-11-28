var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { AgeRangeType } from "./agerangetype";
import { Biography } from "./biography";
import { Birthday } from "./birthday";
import { BraggingRights } from "./braggingrights";
import { CalendarUrl } from "./calendarurl";
import { ClientData } from "./clientdata";
import { CoverPhoto } from "./coverphoto";
import { EmailAddress } from "./emailaddress";
import { Event } from "./event";
import { ExternalId } from "./externalid";
import { FileAs } from "./fileas";
import { Gender } from "./gender";
import { ImClient } from "./imclient";
import { Interest } from "./interest";
import { Locale } from "./locale";
import { Location } from "./location";
import { Membership } from "./membership";
import { PersonMetadata } from "./personmetadata";
import { MiscKeyword } from "./misckeyword";
import { Name } from "./name";
import { Nickname } from "./nickname";
import { Occupation } from "./occupation";
import { Organization } from "./organization";
import { PhoneNumber } from "./phonenumber";
import { Photo } from "./photo";
import { Relation } from "./relation";
import { RelationshipInterest } from "./relationshipinterest";
import { RelationshipStatus } from "./relationshipstatus";
import { Residence } from "./residence";
import { SipAddress } from "./sipaddress";
import { Skill } from "./skill";
import { Tagline } from "./tagline";
import { Url } from "./url";
import { UserDefined } from "./userdefined";
import { AddressInput } from "./address";
import { BiographyInput } from "./biography";
import { BirthdayInput } from "./birthday";
import { BraggingRightsInput } from "./braggingrights";
import { CalendarUrlInput } from "./calendarurl";
import { ClientDataInput } from "./clientdata";
import { EmailAddressInput } from "./emailaddress";
import { EventInput } from "./event";
import { ExternalIdInput } from "./externalid";
import { FileAsInput } from "./fileas";
import { GenderInput } from "./gender";
import { ImClientInput } from "./imclient";
import { InterestInput } from "./interest";
import { LocaleInput } from "./locale";
import { LocationInput } from "./location";
import { MembershipInput } from "./membership";
import { PersonMetadataInput } from "./personmetadata";
import { MiscKeywordInput } from "./misckeyword";
import { NameInput } from "./name";
import { NicknameInput } from "./nickname";
import { OccupationInput } from "./occupation";
import { OrganizationInput } from "./organization";
import { PhoneNumberInput } from "./phonenumber";
import { RelationInput } from "./relation";
import { ResidenceInput } from "./residence";
import { SipAddressInput } from "./sipaddress";
import { SkillInput } from "./skill";
import { UrlInput } from "./url";
import { UserDefinedInput } from "./userdefined";
export var PersonAgeRangeEnum;
(function (PersonAgeRangeEnum) {
    PersonAgeRangeEnum["AgeRangeUnspecified"] = "AGE_RANGE_UNSPECIFIED";
    PersonAgeRangeEnum["LessThanEighteen"] = "LESS_THAN_EIGHTEEN";
    PersonAgeRangeEnum["EighteenToTwenty"] = "EIGHTEEN_TO_TWENTY";
    PersonAgeRangeEnum["TwentyOneOrOlder"] = "TWENTY_ONE_OR_OLDER";
})(PersonAgeRangeEnum || (PersonAgeRangeEnum = {}));
// Person
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], Person.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageRange" }),
        __metadata("design:type", String)
    ], Person.prototype, "ageRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ageRanges", elemType: AgeRangeType }),
        __metadata("design:type", Array)
    ], Person.prototype, "ageRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=biographies", elemType: Biography }),
        __metadata("design:type", Array)
    ], Person.prototype, "biographies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthdays", elemType: Birthday }),
        __metadata("design:type", Array)
    ], Person.prototype, "birthdays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=braggingRights", elemType: BraggingRights }),
        __metadata("design:type", Array)
    ], Person.prototype, "braggingRights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendarUrls", elemType: CalendarUrl }),
        __metadata("design:type", Array)
    ], Person.prototype, "calendarUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientData", elemType: ClientData }),
        __metadata("design:type", Array)
    ], Person.prototype, "clientData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverPhotos", elemType: CoverPhoto }),
        __metadata("design:type", Array)
    ], Person.prototype, "coverPhotos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddresses", elemType: EmailAddress }),
        __metadata("design:type", Array)
    ], Person.prototype, "emailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Person.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: Event }),
        __metadata("design:type", Array)
    ], Person.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalIds", elemType: ExternalId }),
        __metadata("design:type", Array)
    ], Person.prototype, "externalIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileAses", elemType: FileAs }),
        __metadata("design:type", Array)
    ], Person.prototype, "fileAses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genders", elemType: Gender }),
        __metadata("design:type", Array)
    ], Person.prototype, "genders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imClients", elemType: ImClient }),
        __metadata("design:type", Array)
    ], Person.prototype, "imClients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interests", elemType: Interest }),
        __metadata("design:type", Array)
    ], Person.prototype, "interests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locales", elemType: Locale }),
        __metadata("design:type", Array)
    ], Person.prototype, "locales", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations", elemType: Location }),
        __metadata("design:type", Array)
    ], Person.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberships", elemType: Membership }),
        __metadata("design:type", Array)
    ], Person.prototype, "memberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", PersonMetadata)
    ], Person.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=miscKeywords", elemType: MiscKeyword }),
        __metadata("design:type", Array)
    ], Person.prototype, "miscKeywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: Name }),
        __metadata("design:type", Array)
    ], Person.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nicknames", elemType: Nickname }),
        __metadata("design:type", Array)
    ], Person.prototype, "nicknames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=occupations", elemType: Occupation }),
        __metadata("design:type", Array)
    ], Person.prototype, "occupations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations", elemType: Organization }),
        __metadata("design:type", Array)
    ], Person.prototype, "organizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], Person.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo }),
        __metadata("design:type", Array)
    ], Person.prototype, "photos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations", elemType: Relation }),
        __metadata("design:type", Array)
    ], Person.prototype, "relations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationshipInterests", elemType: RelationshipInterest }),
        __metadata("design:type", Array)
    ], Person.prototype, "relationshipInterests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationshipStatuses", elemType: RelationshipStatus }),
        __metadata("design:type", Array)
    ], Person.prototype, "relationshipStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=residences", elemType: Residence }),
        __metadata("design:type", Array)
    ], Person.prototype, "residences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], Person.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sipAddresses", elemType: SipAddress }),
        __metadata("design:type", Array)
    ], Person.prototype, "sipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skills", elemType: Skill }),
        __metadata("design:type", Array)
    ], Person.prototype, "skills", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taglines", elemType: Tagline }),
        __metadata("design:type", Array)
    ], Person.prototype, "taglines", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls", elemType: Url }),
        __metadata("design:type", Array)
    ], Person.prototype, "urls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDefined", elemType: UserDefined }),
        __metadata("design:type", Array)
    ], Person.prototype, "userDefined", void 0);
    return Person;
}(SpeakeasyBase));
export { Person };
// PersonInput
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
var PersonInput = /** @class */ (function (_super) {
    __extends(PersonInput, _super);
    function PersonInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: AddressInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=biographies", elemType: BiographyInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "biographies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthdays", elemType: BirthdayInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "birthdays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=braggingRights", elemType: BraggingRightsInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "braggingRights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=calendarUrls", elemType: CalendarUrlInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "calendarUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientData", elemType: ClientDataInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "clientData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailAddresses", elemType: EmailAddressInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "emailAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], PersonInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: EventInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalIds", elemType: ExternalIdInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "externalIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileAses", elemType: FileAsInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "fileAses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=genders", elemType: GenderInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "genders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imClients", elemType: ImClientInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "imClients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interests", elemType: InterestInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "interests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locales", elemType: LocaleInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "locales", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locations", elemType: LocationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "locations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memberships", elemType: MembershipInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "memberships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", PersonMetadataInput)
    ], PersonInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=miscKeywords", elemType: MiscKeywordInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "miscKeywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=names", elemType: NameInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "names", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nicknames", elemType: NicknameInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "nicknames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=occupations", elemType: OccupationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "occupations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organizations", elemType: OrganizationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "organizations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: PhoneNumberInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relations", elemType: RelationInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "relations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=residences", elemType: ResidenceInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "residences", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], PersonInput.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sipAddresses", elemType: SipAddressInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "sipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skills", elemType: SkillInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "skills", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urls", elemType: UrlInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "urls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userDefined", elemType: UserDefinedInput }),
        __metadata("design:type", Array)
    ], PersonInput.prototype, "userDefined", void 0);
    return PersonInput;
}(SpeakeasyBase));
export { PersonInput };
