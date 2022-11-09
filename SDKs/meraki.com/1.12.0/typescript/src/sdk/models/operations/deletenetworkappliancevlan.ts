import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkApplianceVlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=vlanId" })
  vlanId: string;
}


export class DeleteNetworkApplianceVlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkApplianceVlanPathParams;
}


export class DeleteNetworkApplianceVlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
