import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// PersonAgeRange
/** 
 * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
**/
export class PersonAgeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}


// PersonCoverCoverInfo
/** 
 * Extra information about the cover photo.
**/
export class PersonCoverCoverInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=leftImageOffset" })
  leftImageOffset?: number;

  @Metadata({ data: "json, name=topImageOffset" })
  topImageOffset?: number;
}


// PersonCoverCoverPhoto
/** 
 * The person's primary cover image.
**/
export class PersonCoverCoverPhoto extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// PersonCover
/** 
 * The cover photo content.
**/
export class PersonCover extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverInfo" })
  coverInfo?: PersonCoverCoverInfo;

  @Metadata({ data: "json, name=coverPhoto" })
  coverPhoto?: PersonCoverCoverPhoto;

  @Metadata({ data: "json, name=layout" })
  layout?: string;
}


export class PersonEmails extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// PersonImage
/** 
 * The representation of the person's profile photo.
**/
export class PersonImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// PersonName
/** 
 * An object representation of the individual components of a person's name.
**/
export class PersonName extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=formatted" })
  formatted?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;

  @Metadata({ data: "json, name=honorificPrefix" })
  honorificPrefix?: string;

  @Metadata({ data: "json, name=honorificSuffix" })
  honorificSuffix?: string;

  @Metadata({ data: "json, name=middleName" })
  middleName?: string;
}


export class PersonOrganizations extends SpeakeasyBase {
  @Metadata({ data: "json, name=department" })
  department?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class PersonPlacesLived extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class PersonUrls extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class Person extends SpeakeasyBase {
  @Metadata({ data: "json, name=aboutMe" })
  aboutMe?: string;

  @Metadata({ data: "json, name=ageRange" })
  ageRange?: PersonAgeRange;

  @Metadata({ data: "json, name=birthday" })
  birthday?: string;

  @Metadata({ data: "json, name=braggingRights" })
  braggingRights?: string;

  @Metadata({ data: "json, name=circledByCount" })
  circledByCount?: number;

  @Metadata({ data: "json, name=cover" })
  cover?: PersonCover;

  @Metadata({ data: "json, name=currentLocation" })
  currentLocation?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=emails", elemType: shared.PersonEmails })
  emails?: PersonEmails[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: PersonImage;

  @Metadata({ data: "json, name=isPlusUser" })
  isPlusUser?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=name" })
  name?: PersonName;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=occupation" })
  occupation?: string;

  @Metadata({ data: "json, name=organizations", elemType: shared.PersonOrganizations })
  organizations?: PersonOrganizations[];

  @Metadata({ data: "json, name=placesLived", elemType: shared.PersonPlacesLived })
  placesLived?: PersonPlacesLived[];

  @Metadata({ data: "json, name=plusOneCount" })
  plusOneCount?: number;

  @Metadata({ data: "json, name=relationshipStatus" })
  relationshipStatus?: string;

  @Metadata({ data: "json, name=skills" })
  skills?: string;

  @Metadata({ data: "json, name=tagline" })
  tagline?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=urls", elemType: shared.PersonUrls })
  urls?: PersonUrls[];

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}
