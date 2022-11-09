import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DashboardFilterFilterTypeEnum {
    FilterTypeUnspecified = "FILTER_TYPE_UNSPECIFIED"
,    ResourceLabel = "RESOURCE_LABEL"
,    MetricLabel = "METRIC_LABEL"
,    UserMetadataLabel = "USER_METADATA_LABEL"
,    SystemMetadataLabel = "SYSTEM_METADATA_LABEL"
,    Group = "GROUP"
}


// DashboardFilter
/** 
 * A filter to reduce the amount of data charted in relevant widgets.
**/
export class DashboardFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterType" })
  filterType?: DashboardFilterFilterTypeEnum;

  @Metadata({ data: "json, name=labelKey" })
  labelKey?: string;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;

  @Metadata({ data: "json, name=templateVariable" })
  templateVariable?: string;
}
