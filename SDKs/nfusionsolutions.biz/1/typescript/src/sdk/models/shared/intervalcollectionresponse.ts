import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntervalCollection } from "./intervalcollection";



export class IntervalCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: IntervalCollection;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedCurrency" })
  requestedCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedSymbol" })
  requestedSymbol?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedUnitOfMeasure" })
  requestedUnitOfMeasure?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
