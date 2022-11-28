import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Gets or sets the primary image blurhash.
**/
export declare class BaseItemPersonImageBlurHashes extends SpeakeasyBase {
    art?: Map<string, string>;
    backdrop?: Map<string, string>;
    banner?: Map<string, string>;
    box?: Map<string, string>;
    boxRear?: Map<string, string>;
    chapter?: Map<string, string>;
    disc?: Map<string, string>;
    logo?: Map<string, string>;
    menu?: Map<string, string>;
    primary?: Map<string, string>;
    profile?: Map<string, string>;
    screenshot?: Map<string, string>;
    thumb?: Map<string, string>;
}
/**
 * This is used by the api to get information about a Person within a BaseItem.
**/
export declare class BaseItemPerson extends SpeakeasyBase {
    id?: string;
    imageBlurHashes?: BaseItemPersonImageBlurHashes;
    name?: string;
    primaryImageTag?: string;
    role?: string;
    type?: string;
}
