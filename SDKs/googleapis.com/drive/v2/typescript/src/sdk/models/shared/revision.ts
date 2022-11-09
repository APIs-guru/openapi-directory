import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


// Revision
/** 
 * A revision of a file.
**/
export class Revision extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=exportLinks" })
  exportLinks?: Map<string, string>;

  @Metadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifyingUser" })
  lastModifyingUser?: User;

  @Metadata({ data: "json, name=lastModifyingUserName" })
  lastModifyingUserName?: string;

  @Metadata({ data: "json, name=md5Checksum" })
  md5Checksum?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @Metadata({ data: "json, name=originalFilename" })
  originalFilename?: string;

  @Metadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @Metadata({ data: "json, name=publishAuto" })
  publishAuto?: boolean;

  @Metadata({ data: "json, name=published" })
  published?: boolean;

  @Metadata({ data: "json, name=publishedLink" })
  publishedLink?: string;

  @Metadata({ data: "json, name=publishedOutsideDomain" })
  publishedOutsideDomain?: boolean;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
