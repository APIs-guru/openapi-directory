import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DashboardFilterFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED",
    ResourceLabel = "RESOURCE_LABEL",
    MetricLabel = "METRIC_LABEL",
    UserMetadataLabel = "USER_METADATA_LABEL",
    SystemMetadataLabel = "SYSTEM_METADATA_LABEL",
    Group = "GROUP"
}


// DashboardFilter
/** 
 * A filter to reduce the amount of data charted in relevant widgets.
**/
export class DashboardFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterType" })
  filterType?: DashboardFilterFilterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=labelKey" })
  labelKey?: string;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @SpeakeasyMetadata({ data: "json, name=templateVariable" })
  templateVariable?: string;
}
