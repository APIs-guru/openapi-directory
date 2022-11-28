import { SpeakeasyBase } from "../../../internal/utils";
import { GdataBlobstore2Info } from "./gdatablobstore2info";
import { GdataObjectId } from "./gdataobjectid";
export declare enum GdataCompositeMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    BigstoreRef = "BIGSTORE_REF",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}
/**
 * gdata
**/
export declare class GdataCompositeMedia extends SpeakeasyBase {
    blobRef?: string;
    blobstore2Info?: GdataBlobstore2Info;
    cosmoBinaryReference?: string;
    crc32cHash?: number;
    inline?: string;
    length?: string;
    md5Hash?: string;
    objectId?: GdataObjectId;
    path?: string;
    referenceType?: GdataCompositeMediaReferenceTypeEnum;
    sha1Hash?: string;
}
