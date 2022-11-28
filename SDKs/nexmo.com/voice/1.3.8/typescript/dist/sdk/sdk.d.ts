import { AxiosInstance } from "axios";
import { Calls } from "./calls";
import { PlayDtmf } from "./playdtmf";
import { PlayTts } from "./playtts";
import { StreamAudio } from "./streamaudio";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.nexmo.com/v1/calls"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    calls: Calls;
    playDtmf: PlayDtmf;
    playTts: PlayTts;
    streamAudio: StreamAudio;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
