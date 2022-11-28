import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectConditions
/** 
 * Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.
**/
export class ObjectConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludePrefixes" })
  excludePrefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=includePrefixes" })
  includePrefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=lastModifiedBefore" })
  lastModifiedBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedSince" })
  lastModifiedSince?: string;

  @SpeakeasyMetadata({ data: "json, name=maxTimeElapsedSinceLastModification" })
  maxTimeElapsedSinceLastModification?: string;

  @SpeakeasyMetadata({ data: "json, name=minTimeElapsedSinceLastModification" })
  minTimeElapsedSinceLastModification?: string;
}
