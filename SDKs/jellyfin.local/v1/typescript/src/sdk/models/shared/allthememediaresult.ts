import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThemeMediaResult } from "./thememediaresult";



export class AllThemeMediaResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SoundtrackSongsResult" })
  soundtrackSongsResult?: ThemeMediaResult;

  @SpeakeasyMetadata({ data: "json, name=ThemeSongsResult" })
  themeSongsResult?: ThemeMediaResult;

  @SpeakeasyMetadata({ data: "json, name=ThemeVideosResult" })
  themeVideosResult?: ThemeMediaResult;
}
