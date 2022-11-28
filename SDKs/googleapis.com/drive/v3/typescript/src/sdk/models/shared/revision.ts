import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// Revision
/** 
 * The metadata for a revision to a file.
**/
export class Revision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportLinks" })
  exportLinks?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keepForever" })
  keepForever?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifyingUser" })
  lastModifyingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=md5Checksum" })
  md5Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedTime" })
  modifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=originalFilename" })
  originalFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=publishAuto" })
  publishAuto?: boolean;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishedLink" })
  publishedLink?: string;

  @SpeakeasyMetadata({ data: "json, name=publishedOutsideDomain" })
  publishedOutsideDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}
