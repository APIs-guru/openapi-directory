import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { Operation } from "./operation";



export class ManagedZoneOperationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
