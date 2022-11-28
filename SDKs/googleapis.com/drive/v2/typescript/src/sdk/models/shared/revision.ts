import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// Revision
/** 
 * A revision of a file.
**/
export class Revision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=exportLinks" })
  exportLinks?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifyingUser" })
  lastModifyingUser?: User;

  @SpeakeasyMetadata({ data: "json, name=lastModifyingUserName" })
  lastModifyingUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=md5Checksum" })
  md5Checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=originalFilename" })
  originalFilename?: string;

  @SpeakeasyMetadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishAuto" })
  publishAuto?: boolean;

  @SpeakeasyMetadata({ data: "json, name=published" })
  published?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishedLink" })
  publishedLink?: string;

  @SpeakeasyMetadata({ data: "json, name=publishedOutsideDomain" })
  publishedOutsideDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
