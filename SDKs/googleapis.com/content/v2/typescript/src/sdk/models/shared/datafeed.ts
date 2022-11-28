import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedFetchSchedule } from "./datafeedfetchschedule";
import { DatafeedFormat } from "./datafeedformat";
import { DatafeedTarget } from "./datafeedtarget";



// Datafeed
/** 
 * Datafeed configuration data.
**/
export class Datafeed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeLanguage" })
  attributeLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=fetchSchedule" })
  fetchSchedule?: DatafeedFetchSchedule;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: DatafeedFormat;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=intendedDestinations" })
  intendedDestinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: DatafeedTarget })
  targets?: DatafeedTarget[];
}
