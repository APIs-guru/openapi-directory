import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnLayout } from "./columnlayout";
import { DashboardFilter } from "./dashboardfilter";
import { GridLayout } from "./gridlayout";
import { MosaicLayout } from "./mosaiclayout";
import { RowLayout } from "./rowlayout";



// Dashboard
/** 
 * A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
**/
export class Dashboard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnLayout" })
  columnLayout?: ColumnLayout;

  @SpeakeasyMetadata({ data: "json, name=dashboardFilters", elemType: DashboardFilter })
  dashboardFilters?: DashboardFilter[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=gridLayout" })
  gridLayout?: GridLayout;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mosaicLayout" })
  mosaicLayout?: MosaicLayout;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rowLayout" })
  rowLayout?: RowLayout;
}
