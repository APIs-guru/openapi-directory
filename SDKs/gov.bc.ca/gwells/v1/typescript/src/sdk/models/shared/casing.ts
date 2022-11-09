import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Casing extends SpeakeasyBase {
  @Metadata({ data: "json, name=casing_code" })
  casingCode?: string;

  @Metadata({ data: "json, name=casing_material" })
  casingMaterial?: string;

  @Metadata({ data: "json, name=diameter" })
  diameter: string;

  @Metadata({ data: "json, name=drive_shoe" })
  driveShoe?: boolean;

  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;

  @Metadata({ data: "json, name=wall_thickness" })
  wallThickness?: string;
}
