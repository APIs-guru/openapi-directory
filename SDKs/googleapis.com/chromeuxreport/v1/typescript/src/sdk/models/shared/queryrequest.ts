import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum QueryRequestFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS",
    Phone = "PHONE",
    Desktop = "DESKTOP",
    Tablet = "TABLET"
}


// QueryRequest
/** 
 * Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
**/
export class QueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectiveConnectionType" })
  effectiveConnectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=formFactor" })
  formFactor?: QueryRequestFormFactorEnum;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: string[];

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
