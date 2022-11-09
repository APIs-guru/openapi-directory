import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Summary } from "./summary";


export class SummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: Summary;

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
