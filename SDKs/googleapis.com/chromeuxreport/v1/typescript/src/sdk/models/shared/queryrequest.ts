import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum QueryRequestFormFactorEnum {
    AllFormFactors = "ALL_FORM_FACTORS"
,    Phone = "PHONE"
,    Desktop = "DESKTOP"
,    Tablet = "TABLET"
}


// QueryRequest
/** 
 * Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
**/
export class QueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectiveConnectionType" })
  effectiveConnectionType?: string;

  @Metadata({ data: "json, name=formFactor" })
  formFactor?: QueryRequestFormFactorEnum;

  @Metadata({ data: "json, name=metrics" })
  metrics?: string[];

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
