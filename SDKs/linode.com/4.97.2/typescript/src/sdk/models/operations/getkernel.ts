import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKernelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=kernelId" })
  kernelId: string;
}


export class GetKernelDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetKernelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetKernelPathParams;
}


export class GetKernelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  kernel?: shared.Kernel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getKernelDefaultApplicationJsonObject?: GetKernelDefaultApplicationJson;
}
