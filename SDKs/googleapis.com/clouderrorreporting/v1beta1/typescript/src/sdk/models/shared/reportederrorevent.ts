import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorContext } from "./errorcontext";
import { ServiceContext } from "./servicecontext";


// ReportedErrorEvent
/** 
 * An error event which is reported to the Error Reporting system.
**/
export class ReportedErrorEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: ErrorContext;

  @Metadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=serviceContext" })
  serviceContext?: ServiceContext;
}
