import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateBucket } from "./aggregatebucket";



export class AggregateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket", elemType: AggregateBucket })
  bucket?: AggregateBucket[];
}
