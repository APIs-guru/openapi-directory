import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum PersonAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    LessThanEighteen = "LESS_THAN_EIGHTEEN",
    EighteenToTwenty = "EIGHTEEN_TO_TWENTY",
    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
export declare class Person extends SpeakeasyBase {
    addresses?: Address[];
    ageRange?: PersonAgeRangeEnum;
    ageRanges?: AgeRangeType[];
    biographies?: Biography[];
    birthdays?: Birthday[];
    braggingRights?: BraggingRights[];
    calendarUrls?: CalendarUrl[];
    clientData?: ClientData[];
    coverPhotos?: CoverPhoto[];
    emailAddresses?: EmailAddress[];
    etag?: string;
    events?: Event[];
    externalIds?: ExternalId[];
    fileAses?: FileAs[];
    genders?: Gender[];
    imClients?: ImClient[];
    interests?: Interest[];
    locales?: Locale[];
    locations?: Location[];
    memberships?: Membership[];
    metadata?: PersonMetadata;
    miscKeywords?: MiscKeyword[];
    names?: Name[];
    nicknames?: Nickname[];
    occupations?: Occupation[];
    organizations?: Organization[];
    phoneNumbers?: PhoneNumber[];
    photos?: Photo[];
    relations?: Relation[];
    relationshipInterests?: RelationshipInterest[];
    relationshipStatuses?: RelationshipStatus[];
    residences?: Residence[];
    resourceName?: string;
    sipAddresses?: SipAddress[];
    skills?: Skill[];
    taglines?: Tagline[];
    urls?: Url[];
    userDefined?: UserDefined[];
}
/**
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
export declare class PersonInput extends SpeakeasyBase {
    addresses?: AddressInput[];
    biographies?: BiographyInput[];
    birthdays?: BirthdayInput[];
    braggingRights?: BraggingRightsInput[];
    calendarUrls?: CalendarUrlInput[];
    clientData?: ClientDataInput[];
    emailAddresses?: EmailAddressInput[];
    etag?: string;
    events?: EventInput[];
    externalIds?: ExternalIdInput[];
    fileAses?: FileAsInput[];
    genders?: GenderInput[];
    imClients?: ImClientInput[];
    interests?: InterestInput[];
    locales?: LocaleInput[];
    locations?: LocationInput[];
    memberships?: MembershipInput[];
    metadata?: PersonMetadataInput;
    miscKeywords?: MiscKeywordInput[];
    names?: NameInput[];
    nicknames?: NicknameInput[];
    occupations?: OccupationInput[];
    organizations?: OrganizationInput[];
    phoneNumbers?: PhoneNumberInput[];
    relations?: RelationInput[];
    residences?: ResidenceInput[];
    resourceName?: string;
    sipAddresses?: SipAddressInput[];
    skills?: SkillInput[];
    urls?: UrlInput[];
    userDefined?: UserDefinedInput[];
}
