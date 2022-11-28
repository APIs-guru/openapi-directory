import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SessionInput
/** 
 * A session in the Cloud Spanner API.
**/
export class SessionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creatorRole" })
  creatorRole?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}


// Session
/** 
 * A session in the Cloud Spanner API.
**/
export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approximateLastUseTime" })
  approximateLastUseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorRole" })
  creatorRole?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
