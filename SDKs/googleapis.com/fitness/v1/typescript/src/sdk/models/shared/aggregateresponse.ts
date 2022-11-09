import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateBucket } from "./aggregatebucket";


export class AggregateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket", elemType: shared.AggregateBucket })
  bucket?: AggregateBucket[];
}
