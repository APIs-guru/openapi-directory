import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Rate } from "./rate";


export class RateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Rate;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=requestedCurrency" })
  requestedCurrency?: string;

  @Metadata({ data: "json, name=requestedSymbol" })
  requestedSymbol?: string;

  @Metadata({ data: "json, name=requestedUnitOfMeasure" })
  requestedUnitOfMeasure?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
