import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcsData
/** 
 * In a GcsData resource, an object's name is the Cloud Storage object's name and its "last modification time" refers to the object's `updated` property of Cloud Storage objects, which changes when the content or the metadata of the object is updated.
**/
export class GcsData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
