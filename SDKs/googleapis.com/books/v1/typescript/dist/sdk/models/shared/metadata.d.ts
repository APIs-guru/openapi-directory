import { SpeakeasyBase } from "../../../internal/utils";
export declare class MetadataItems extends SpeakeasyBase {
    downloadUrl?: string;
    encryptedKey?: string;
    language?: string;
    size?: string;
    version?: string;
}
export declare class Metadata extends SpeakeasyBase {
    items?: MetadataItems[];
    kind?: string;
}
