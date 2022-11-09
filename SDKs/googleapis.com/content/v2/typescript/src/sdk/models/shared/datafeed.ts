import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatafeedFetchSchedule } from "./datafeedfetchschedule";
import { DatafeedFormat } from "./datafeedformat";
import { DatafeedTarget } from "./datafeedtarget";


// Datafeed
/** 
 * Datafeed configuration data.
**/
export class Datafeed extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeLanguage" })
  attributeLanguage?: string;

  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=fetchSchedule" })
  fetchSchedule?: DatafeedFetchSchedule;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=format" })
  format?: DatafeedFormat;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=intendedDestinations" })
  intendedDestinations?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @Metadata({ data: "json, name=targets", elemType: shared.DatafeedTarget })
  targets?: DatafeedTarget[];
}
