import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Property
/** 
 * A key-value pair attached to a file that is either public or private to an application.
 * The following limits apply to file properties:  
 * - Maximum of 100 properties total per file
 * - Maximum of 30 private properties per app
 * - Maximum of 30 public properties
 * - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property.
**/
export class Property extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: string;
}
