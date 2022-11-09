import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThemeMediaResult } from "./thememediaresult";
import { ThemeMediaResult } from "./thememediaresult";
import { ThemeMediaResult } from "./thememediaresult";


export class AllThemeMediaResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SoundtrackSongsResult" })
  soundtrackSongsResult?: ThemeMediaResult;

  @Metadata({ data: "json, name=ThemeSongsResult" })
  themeSongsResult?: ThemeMediaResult;

  @Metadata({ data: "json, name=ThemeVideosResult" })
  themeVideosResult?: ThemeMediaResult;
}
