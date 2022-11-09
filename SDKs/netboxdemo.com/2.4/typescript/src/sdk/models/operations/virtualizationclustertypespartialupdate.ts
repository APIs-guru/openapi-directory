import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClusterTypesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterTypesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClusterTypesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterType;
}


export class VirtualizationClusterTypesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  clusterType?: shared.ClusterType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
