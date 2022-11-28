import { SpeakeasyBase } from "../../../internal/utils";
import { Blobstore2Info } from "./blobstore2info";
import { ObjectId } from "./objectid";
export declare enum CompositeMediaReferenceTypeEnum {
    Path = "PATH",
    BlobRef = "BLOB_REF",
    Inline = "INLINE",
    BigstoreRef = "BIGSTORE_REF",
    CosmoBinaryReference = "COSMO_BINARY_REFERENCE"
}
/**
 * # gdata.* are outside protos with mising documentation
**/
export declare class CompositeMedia extends SpeakeasyBase {
    blobRef?: string;
    blobstore2Info?: Blobstore2Info;
    cosmoBinaryReference?: string;
    crc32cHash?: number;
    inline?: string;
    length?: string;
    md5Hash?: string;
    objectId?: ObjectId;
    path?: string;
    referenceType?: CompositeMediaReferenceTypeEnum;
    sha1Hash?: string;
}
