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


export enum PersonAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED",
    LessThanEighteen = "LESS_THAN_EIGHTEEN",
    EighteenToTwenty = "EIGHTEEN_TO_TWENTY",
    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}


// Person
/** 
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=ageRange" })
  ageRange?: PersonAgeRangeEnum;

  @SpeakeasyMetadata({ data: "json, name=ageRanges", elemType: AgeRangeType })
  ageRanges?: AgeRangeType[];

  @SpeakeasyMetadata({ data: "json, name=biographies", elemType: Biography })
  biographies?: Biography[];

  @SpeakeasyMetadata({ data: "json, name=birthdays", elemType: Birthday })
  birthdays?: Birthday[];

  @SpeakeasyMetadata({ data: "json, name=braggingRights", elemType: BraggingRights })
  braggingRights?: BraggingRights[];

  @SpeakeasyMetadata({ data: "json, name=calendarUrls", elemType: CalendarUrl })
  calendarUrls?: CalendarUrl[];

  @SpeakeasyMetadata({ data: "json, name=clientData", elemType: ClientData })
  clientData?: ClientData[];

  @SpeakeasyMetadata({ data: "json, name=coverPhotos", elemType: CoverPhoto })
  coverPhotos?: CoverPhoto[];

  @SpeakeasyMetadata({ data: "json, name=emailAddresses", elemType: EmailAddress })
  emailAddresses?: EmailAddress[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: Event })
  events?: Event[];

  @SpeakeasyMetadata({ data: "json, name=externalIds", elemType: ExternalId })
  externalIds?: ExternalId[];

  @SpeakeasyMetadata({ data: "json, name=fileAses", elemType: FileAs })
  fileAses?: FileAs[];

  @SpeakeasyMetadata({ data: "json, name=genders", elemType: Gender })
  genders?: Gender[];

  @SpeakeasyMetadata({ data: "json, name=imClients", elemType: ImClient })
  imClients?: ImClient[];

  @SpeakeasyMetadata({ data: "json, name=interests", elemType: Interest })
  interests?: Interest[];

  @SpeakeasyMetadata({ data: "json, name=locales", elemType: Locale })
  locales?: Locale[];

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: Location })
  locations?: Location[];

  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: Membership })
  memberships?: Membership[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PersonMetadata;

  @SpeakeasyMetadata({ data: "json, name=miscKeywords", elemType: MiscKeyword })
  miscKeywords?: MiscKeyword[];

  @SpeakeasyMetadata({ data: "json, name=names", elemType: Name })
  names?: Name[];

  @SpeakeasyMetadata({ data: "json, name=nicknames", elemType: Nickname })
  nicknames?: Nickname[];

  @SpeakeasyMetadata({ data: "json, name=occupations", elemType: Occupation })
  occupations?: Occupation[];

  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: Organization })
  organizations?: Organization[];

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=photos", elemType: Photo })
  photos?: Photo[];

  @SpeakeasyMetadata({ data: "json, name=relations", elemType: Relation })
  relations?: Relation[];

  @SpeakeasyMetadata({ data: "json, name=relationshipInterests", elemType: RelationshipInterest })
  relationshipInterests?: RelationshipInterest[];

  @SpeakeasyMetadata({ data: "json, name=relationshipStatuses", elemType: RelationshipStatus })
  relationshipStatuses?: RelationshipStatus[];

  @SpeakeasyMetadata({ data: "json, name=residences", elemType: Residence })
  residences?: Residence[];

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=sipAddresses", elemType: SipAddress })
  sipAddresses?: SipAddress[];

  @SpeakeasyMetadata({ data: "json, name=skills", elemType: Skill })
  skills?: Skill[];

  @SpeakeasyMetadata({ data: "json, name=taglines", elemType: Tagline })
  taglines?: Tagline[];

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: Url })
  urls?: Url[];

  @SpeakeasyMetadata({ data: "json, name=userDefined", elemType: UserDefined })
  userDefined?: UserDefined[];
}


// PersonInput
/** 
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
export class PersonInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: AddressInput })
  addresses?: AddressInput[];

  @SpeakeasyMetadata({ data: "json, name=biographies", elemType: BiographyInput })
  biographies?: BiographyInput[];

  @SpeakeasyMetadata({ data: "json, name=birthdays", elemType: BirthdayInput })
  birthdays?: BirthdayInput[];

  @SpeakeasyMetadata({ data: "json, name=braggingRights", elemType: BraggingRightsInput })
  braggingRights?: BraggingRightsInput[];

  @SpeakeasyMetadata({ data: "json, name=calendarUrls", elemType: CalendarUrlInput })
  calendarUrls?: CalendarUrlInput[];

  @SpeakeasyMetadata({ data: "json, name=clientData", elemType: ClientDataInput })
  clientData?: ClientDataInput[];

  @SpeakeasyMetadata({ data: "json, name=emailAddresses", elemType: EmailAddressInput })
  emailAddresses?: EmailAddressInput[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: EventInput })
  events?: EventInput[];

  @SpeakeasyMetadata({ data: "json, name=externalIds", elemType: ExternalIdInput })
  externalIds?: ExternalIdInput[];

  @SpeakeasyMetadata({ data: "json, name=fileAses", elemType: FileAsInput })
  fileAses?: FileAsInput[];

  @SpeakeasyMetadata({ data: "json, name=genders", elemType: GenderInput })
  genders?: GenderInput[];

  @SpeakeasyMetadata({ data: "json, name=imClients", elemType: ImClientInput })
  imClients?: ImClientInput[];

  @SpeakeasyMetadata({ data: "json, name=interests", elemType: InterestInput })
  interests?: InterestInput[];

  @SpeakeasyMetadata({ data: "json, name=locales", elemType: LocaleInput })
  locales?: LocaleInput[];

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: LocationInput })
  locations?: LocationInput[];

  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: MembershipInput })
  memberships?: MembershipInput[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: PersonMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=miscKeywords", elemType: MiscKeywordInput })
  miscKeywords?: MiscKeywordInput[];

  @SpeakeasyMetadata({ data: "json, name=names", elemType: NameInput })
  names?: NameInput[];

  @SpeakeasyMetadata({ data: "json, name=nicknames", elemType: NicknameInput })
  nicknames?: NicknameInput[];

  @SpeakeasyMetadata({ data: "json, name=occupations", elemType: OccupationInput })
  occupations?: OccupationInput[];

  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: OrganizationInput })
  organizations?: OrganizationInput[];

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: PhoneNumberInput })
  phoneNumbers?: PhoneNumberInput[];

  @SpeakeasyMetadata({ data: "json, name=relations", elemType: RelationInput })
  relations?: RelationInput[];

  @SpeakeasyMetadata({ data: "json, name=residences", elemType: ResidenceInput })
  residences?: ResidenceInput[];

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=sipAddresses", elemType: SipAddressInput })
  sipAddresses?: SipAddressInput[];

  @SpeakeasyMetadata({ data: "json, name=skills", elemType: SkillInput })
  skills?: SkillInput[];

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: UrlInput })
  urls?: UrlInput[];

  @SpeakeasyMetadata({ data: "json, name=userDefined", elemType: UserDefinedInput })
  userDefined?: UserDefinedInput[];
}
