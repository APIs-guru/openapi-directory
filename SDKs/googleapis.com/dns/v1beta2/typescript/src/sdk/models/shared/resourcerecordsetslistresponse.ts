import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResourceRecordSet } from "./resourcerecordset";



export class ResourceRecordSetsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rrsets", elemType: ResourceRecordSet })
  rrsets?: ResourceRecordSet[];
}
