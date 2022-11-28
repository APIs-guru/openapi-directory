import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeshInput
/** 
 * Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
**/
export class MeshInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=interceptionPort" })
  interceptionPort?: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// Mesh
/** 
 * Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
**/
export class Mesh extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=interceptionPort" })
  interceptionPort?: number;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
