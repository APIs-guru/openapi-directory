import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";

export enum GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum {
    SampleMethodUnspecified = "SAMPLE_METHOD_UNSPECIFIED"
,    Top = "TOP"
,    RandomStart = "RANDOM_START"
}


// GooglePrivacyDlpV2BigQueryOptions
/** 
 * Options defining BigQuery table and row identifiers.
**/
export class GooglePrivacyDlpV2BigQueryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedFields", elemType: shared.GooglePrivacyDlpV2FieldId })
  excludedFields?: GooglePrivacyDlpV2FieldId[];

  @Metadata({ data: "json, name=identifyingFields", elemType: shared.GooglePrivacyDlpV2FieldId })
  identifyingFields?: GooglePrivacyDlpV2FieldId[];

  @Metadata({ data: "json, name=includedFields", elemType: shared.GooglePrivacyDlpV2FieldId })
  includedFields?: GooglePrivacyDlpV2FieldId[];

  @Metadata({ data: "json, name=rowsLimit" })
  rowsLimit?: string;

  @Metadata({ data: "json, name=rowsLimitPercent" })
  rowsLimitPercent?: number;

  @Metadata({ data: "json, name=sampleMethod" })
  sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum;

  @Metadata({ data: "json, name=tableReference" })
  tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
