import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PersonAgeRange
/** 
 * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
**/
export class PersonAgeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}


// PersonCoverCoverInfo
/** 
 * Extra information about the cover photo.
**/
export class PersonCoverCoverInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=leftImageOffset" })
  leftImageOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=topImageOffset" })
  topImageOffset?: number;
}


// PersonCoverCoverPhoto
/** 
 * The person's primary cover image.
**/
export class PersonCoverCoverPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// PersonCover
/** 
 * The cover photo content.
**/
export class PersonCover extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverInfo" })
  coverInfo?: PersonCoverCoverInfo;

  @SpeakeasyMetadata({ data: "json, name=coverPhoto" })
  coverPhoto?: PersonCoverCoverPhoto;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: string;
}


export class PersonEmails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// PersonImage
/** 
 * The representation of the person's profile photo.
**/
export class PersonImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// PersonName
/** 
 * An object representation of the individual components of a person's name.
**/
export class PersonName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=formatted" })
  formatted?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=honorificPrefix" })
  honorificPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=honorificSuffix" })
  honorificSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=middleName" })
  middleName?: string;
}


export class PersonOrganizations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class PersonPlacesLived extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PersonUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aboutMe" })
  aboutMe?: string;

  @SpeakeasyMetadata({ data: "json, name=ageRange" })
  ageRange?: PersonAgeRange;

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: string;

  @SpeakeasyMetadata({ data: "json, name=braggingRights" })
  braggingRights?: string;

  @SpeakeasyMetadata({ data: "json, name=circledByCount" })
  circledByCount?: number;

  @SpeakeasyMetadata({ data: "json, name=cover" })
  cover?: PersonCover;

  @SpeakeasyMetadata({ data: "json, name=currentLocation" })
  currentLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: PersonEmails })
  emails?: PersonEmails[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PersonImage;

  @SpeakeasyMetadata({ data: "json, name=isPlusUser" })
  isPlusUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: PersonName;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=occupation" })
  occupation?: string;

  @SpeakeasyMetadata({ data: "json, name=organizations", elemType: PersonOrganizations })
  organizations?: PersonOrganizations[];

  @SpeakeasyMetadata({ data: "json, name=placesLived", elemType: PersonPlacesLived })
  placesLived?: PersonPlacesLived[];

  @SpeakeasyMetadata({ data: "json, name=plusOneCount" })
  plusOneCount?: number;

  @SpeakeasyMetadata({ data: "json, name=relationshipStatus" })
  relationshipStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=skills" })
  skills?: string;

  @SpeakeasyMetadata({ data: "json, name=tagline" })
  tagline?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urls", elemType: PersonUrls })
  urls?: PersonUrls[];

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}
