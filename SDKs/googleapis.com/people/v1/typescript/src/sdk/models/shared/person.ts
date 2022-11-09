import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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

export enum PersonAgeRangeEnum {
    AgeRangeUnspecified = "AGE_RANGE_UNSPECIFIED"
,    LessThanEighteen = "LESS_THAN_EIGHTEEN"
,    EighteenToTwenty = "EIGHTEEN_TO_TWENTY"
,    TwentyOneOrOlder = "TWENTY_ONE_OR_OLDER"
}


// Person
/** 
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
export class Person extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=ageRange" })
  ageRange?: PersonAgeRangeEnum;

  @Metadata({ data: "json, name=ageRanges", elemType: shared.AgeRangeType })
  ageRanges?: AgeRangeType[];

  @Metadata({ data: "json, name=biographies", elemType: shared.Biography })
  biographies?: Biography[];

  @Metadata({ data: "json, name=birthdays", elemType: shared.Birthday })
  birthdays?: Birthday[];

  @Metadata({ data: "json, name=braggingRights", elemType: shared.BraggingRights })
  braggingRights?: BraggingRights[];

  @Metadata({ data: "json, name=calendarUrls", elemType: shared.CalendarUrl })
  calendarUrls?: CalendarUrl[];

  @Metadata({ data: "json, name=clientData", elemType: shared.ClientData })
  clientData?: ClientData[];

  @Metadata({ data: "json, name=coverPhotos", elemType: shared.CoverPhoto })
  coverPhotos?: CoverPhoto[];

  @Metadata({ data: "json, name=emailAddresses", elemType: shared.EmailAddress })
  emailAddresses?: EmailAddress[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=events", elemType: shared.Event })
  events?: Event[];

  @Metadata({ data: "json, name=externalIds", elemType: shared.ExternalId })
  externalIds?: ExternalId[];

  @Metadata({ data: "json, name=fileAses", elemType: shared.FileAs })
  fileAses?: FileAs[];

  @Metadata({ data: "json, name=genders", elemType: shared.Gender })
  genders?: Gender[];

  @Metadata({ data: "json, name=imClients", elemType: shared.ImClient })
  imClients?: ImClient[];

  @Metadata({ data: "json, name=interests", elemType: shared.Interest })
  interests?: Interest[];

  @Metadata({ data: "json, name=locales", elemType: shared.Locale })
  locales?: Locale[];

  @Metadata({ data: "json, name=locations", elemType: shared.Location })
  locations?: Location[];

  @Metadata({ data: "json, name=memberships", elemType: shared.Membership })
  memberships?: Membership[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: PersonMetadata;

  @Metadata({ data: "json, name=miscKeywords", elemType: shared.MiscKeyword })
  miscKeywords?: MiscKeyword[];

  @Metadata({ data: "json, name=names", elemType: shared.Name })
  names?: Name[];

  @Metadata({ data: "json, name=nicknames", elemType: shared.Nickname })
  nicknames?: Nickname[];

  @Metadata({ data: "json, name=occupations", elemType: shared.Occupation })
  occupations?: Occupation[];

  @Metadata({ data: "json, name=organizations", elemType: shared.Organization })
  organizations?: Organization[];

  @Metadata({ data: "json, name=phoneNumbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: Photo[];

  @Metadata({ data: "json, name=relations", elemType: shared.Relation })
  relations?: Relation[];

  @Metadata({ data: "json, name=relationshipInterests", elemType: shared.RelationshipInterest })
  relationshipInterests?: RelationshipInterest[];

  @Metadata({ data: "json, name=relationshipStatuses", elemType: shared.RelationshipStatus })
  relationshipStatuses?: RelationshipStatus[];

  @Metadata({ data: "json, name=residences", elemType: shared.Residence })
  residences?: Residence[];

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=sipAddresses", elemType: shared.SipAddress })
  sipAddresses?: SipAddress[];

  @Metadata({ data: "json, name=skills", elemType: shared.Skill })
  skills?: Skill[];

  @Metadata({ data: "json, name=taglines", elemType: shared.Tagline })
  taglines?: Tagline[];

  @Metadata({ data: "json, name=urls", elemType: shared.Url })
  urls?: Url[];

  @Metadata({ data: "json, name=userDefined", elemType: shared.UserDefined })
  userDefined?: UserDefined[];
}
