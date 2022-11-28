import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";


export enum GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum {
    SampleMethodUnspecified = "SAMPLE_METHOD_UNSPECIFIED",
    Top = "TOP",
    RandomStart = "RANDOM_START"
}


// GooglePrivacyDlpV2BigQueryOptions
/** 
 * Options defining BigQuery table and row identifiers.
**/
export class GooglePrivacyDlpV2BigQueryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedFields", elemType: GooglePrivacyDlpV2FieldId })
  excludedFields?: GooglePrivacyDlpV2FieldId[];

  @SpeakeasyMetadata({ data: "json, name=identifyingFields", elemType: GooglePrivacyDlpV2FieldId })
  identifyingFields?: GooglePrivacyDlpV2FieldId[];

  @SpeakeasyMetadata({ data: "json, name=includedFields", elemType: GooglePrivacyDlpV2FieldId })
  includedFields?: GooglePrivacyDlpV2FieldId[];

  @SpeakeasyMetadata({ data: "json, name=rowsLimit" })
  rowsLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=rowsLimitPercent" })
  rowsLimitPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=sampleMethod" })
  sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=tableReference" })
  tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
