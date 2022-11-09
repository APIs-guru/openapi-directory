import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VirtualizationClusterTypesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class VirtualizationClusterTypesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VirtualizationClusterTypesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ClusterType;
}


export class VirtualizationClusterTypesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  clusterType?: shared.ClusterType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
