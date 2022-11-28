import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Casing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=casing_code" })
  casingCode?: string;

  @SpeakeasyMetadata({ data: "json, name=casing_material" })
  casingMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=diameter" })
  diameter: string;

  @SpeakeasyMetadata({ data: "json, name=drive_shoe" })
  driveShoe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;

  @SpeakeasyMetadata({ data: "json, name=wall_thickness" })
  wallThickness?: string;
}
