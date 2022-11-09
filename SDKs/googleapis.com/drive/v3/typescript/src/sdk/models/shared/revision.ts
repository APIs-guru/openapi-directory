import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


// Revision
/** 
 * The metadata for a revision to a file.
**/
export class Revision extends SpeakeasyBase {
  @Metadata({ data: "json, name=exportLinks" })
  exportLinks?: Map<string, string>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=keepForever" })
  keepForever?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastModifyingUser" })
  lastModifyingUser?: User;

  @Metadata({ data: "json, name=md5Checksum" })
  md5Checksum?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;

  @Metadata({ data: "json, name=originalFilename" })
  originalFilename?: string;

  @Metadata({ data: "json, name=publishAuto" })
  publishAuto?: boolean;

  @Metadata({ data: "json, name=published" })
  published?: boolean;

  @Metadata({ data: "json, name=publishedLink" })
  publishedLink?: string;

  @Metadata({ data: "json, name=publishedOutsideDomain" })
  publishedOutsideDomain?: boolean;

  @Metadata({ data: "json, name=size" })
  size?: string;
}
