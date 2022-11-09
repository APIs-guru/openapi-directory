import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetKernelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=kernelId" })
  kernelId: string;
}


export class GetKernelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetKernelPathParams;
}


export class GetKernelDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetKernelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  kernel?: shared.Kernel;

  @Metadata()
  statusCode: number;

  @Metadata()
  getKernelDefaultApplicationJsonObject?: GetKernelDefaultApplicationJson;
}
