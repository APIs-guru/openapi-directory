import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rate } from "./rate";



export class RateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Rate;

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
