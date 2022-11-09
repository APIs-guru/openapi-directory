import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.
**/
export declare class PersonAgeRange extends SpeakeasyBase {
    max?: number;
    min?: number;
}
/**
 * Extra information about the cover photo.
**/
export declare class PersonCoverCoverInfo extends SpeakeasyBase {
    leftImageOffset?: number;
    topImageOffset?: number;
}
/**
 * The person's primary cover image.
**/
export declare class PersonCoverCoverPhoto extends SpeakeasyBase {
    height?: number;
    url?: string;
    width?: number;
}
/**
 * The cover photo content.
**/
export declare class PersonCover extends SpeakeasyBase {
    coverInfo?: PersonCoverCoverInfo;
    coverPhoto?: PersonCoverCoverPhoto;
    layout?: string;
}
export declare class PersonEmails extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * The representation of the person's profile photo.
**/
export declare class PersonImage extends SpeakeasyBase {
    isDefault?: boolean;
    url?: string;
}
/**
 * An object representation of the individual components of a person's name.
**/
export declare class PersonName extends SpeakeasyBase {
    familyName?: string;
    formatted?: string;
    givenName?: string;
    honorificPrefix?: string;
    honorificSuffix?: string;
    middleName?: string;
}
export declare class PersonOrganizations extends SpeakeasyBase {
    department?: string;
    description?: string;
    endDate?: string;
    location?: string;
    name?: string;
    primary?: boolean;
    startDate?: string;
    title?: string;
    type?: string;
}
export declare class PersonPlacesLived extends SpeakeasyBase {
    primary?: boolean;
    value?: string;
}
export declare class PersonUrls extends SpeakeasyBase {
    label?: string;
    type?: string;
    value?: string;
}
export declare class Person extends SpeakeasyBase {
    aboutMe?: string;
    ageRange?: PersonAgeRange;
    birthday?: string;
    braggingRights?: string;
    circledByCount?: number;
    cover?: PersonCover;
    currentLocation?: string;
    displayName?: string;
    domain?: string;
    emails?: PersonEmails[];
    etag?: string;
    gender?: string;
    id?: string;
    image?: PersonImage;
    isPlusUser?: boolean;
    kind?: string;
    language?: string;
    name?: PersonName;
    nickname?: string;
    objectType?: string;
    occupation?: string;
    organizations?: PersonOrganizations[];
    placesLived?: PersonPlacesLived[];
    plusOneCount?: number;
    relationshipStatus?: string;
    skills?: string;
    tagline?: string;
    url?: string;
    urls?: PersonUrls[];
    verified?: boolean;
}
