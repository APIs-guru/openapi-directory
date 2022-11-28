import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnLayout } from "./columnlayout";
import { DashboardFilter } from "./dashboardfilter";
import { GridLayout } from "./gridlayout";
import { MosaicLayout } from "./mosaiclayout";
import { RowLayout } from "./rowlayout";
/**
 * A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.
**/
export declare class Dashboard extends SpeakeasyBase {
    columnLayout?: ColumnLayout;
    dashboardFilters?: DashboardFilter[];
    displayName?: string;
    etag?: string;
    gridLayout?: GridLayout;
    labels?: Map<string, string>;
    mosaicLayout?: MosaicLayout;
    name?: string;
    rowLayout?: RowLayout;
}
