import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=columnLayout" })
  columnLayout?: ColumnLayout;

  @Metadata({ data: "json, name=dashboardFilters", elemType: shared.DashboardFilter })
  dashboardFilters?: DashboardFilter[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=gridLayout" })
  gridLayout?: GridLayout;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mosaicLayout" })
  mosaicLayout?: MosaicLayout;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rowLayout" })
  rowLayout?: RowLayout;
}
