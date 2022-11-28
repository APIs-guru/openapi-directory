# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.TranscoderProjectsLocationsJobTemplatesCreateRequest{
        Security: operations.TranscoderProjectsLocationsJobTemplatesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.TranscoderProjectsLocationsJobTemplatesCreatePathParams{
            Parent: "perferendis",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "sint",
            Alt: "media",
            Callback: "est",
            Fields: "ad",
            JobTemplateID: "quis",
            Key: "ipsa",
            OauthToken: "pariatur",
            PrettyPrint: false,
            QuotaUser: "non",
            UploadType: "quia",
            UploadProtocol: "non",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "quas",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "labore",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "nulla",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "autem",
                        Inputs: []string{
                            "rem",
                        },
                        Key: "ut",
                        StartTimeOffset: "in",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "iure",
                        Inputs: []string{
                            "aliquam",
                            "necessitatibus",
                        },
                        Key: "architecto",
                        StartTimeOffset: "repellendus",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "laudantium",
                        Inputs: []string{
                            "voluptas",
                            "eum",
                        },
                        Key: "deserunt",
                        StartTimeOffset: "et",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 4097474899540328250,
                            ChannelCount: 2543231146263007955,
                            ChannelLayout: []string{
                                "cumque",
                                "harum",
                            },
                            Codec: "sequi",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 7797162079634821085,
                                                    GainDb: 27.200001,
                                                    Key: "sunt",
                                                    Track: 3365752909053860324,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 2518647374994685705,
                                                    GainDb: 66.199997,
                                                    Key: "qui",
                                                    Track: 4323586530958414898,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 340400890369386520,
                                                    GainDb: 58.200001,
                                                    Key: "nihil",
                                                    Track: 304033318772208543,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 3224842635320094065,
                                                    GainDb: 31.200001,
                                                    Key: "provident",
                                                    Track: 1212164163157738645,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 8856497738629359737,
                                                    GainDb: 18.200001,
                                                    Key: "aut",
                                                    Track: 3310331092033621059,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 6152792843170689862,
                                                    GainDb: 48.099998,
                                                    Key: "saepe",
                                                    Track: 412640562849164214,
                                                },
                                            },
                                        },
                                    },
                                    Key: "unde",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 7806191432418906498,
                                                    GainDb: 23.100000,
                                                    Key: "eum",
                                                    Track: 122103816252635459,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 2170726881679182695,
                                                    GainDb: 10.200000,
                                                    Key: "repellendus",
                                                    Track: 6482989379889661701,
                                                },
                                            },
                                        },
                                    },
                                    Key: "quia",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 1650361670742805926,
                                                    GainDb: 12.200000,
                                                    Key: "iste",
                                                    Track: 8526777569553152952,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 6300043633116788809,
                                                    GainDb: 82.099998,
                                                    Key: "hic",
                                                    Track: 1680912952135509319,
                                                },
                                            },
                                        },
                                    },
                                    Key: "saepe",
                                },
                            },
                            SampleRateHertz: 9124019767510034173,
                        },
                        Key: "placeat",
                        TextStream: &shared.TextStream{
                            Codec: "quos",
                            LanguageCode: "repellat",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "iusto",
                                            Track: 7875554111815946629,
                                        },
                                        shared.TextInput{
                                            Key: "amet",
                                            Track: 4657902838894521576,
                                        },
                                    },
                                    Key: "earum",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "nobis",
                                            Track: 734580936732778662,
                                        },
                                        shared.TextInput{
                                            Key: "laboriosam",
                                            Track: 4838287299199827112,
                                        },
                                        shared.TextInput{
                                            Key: "iure",
                                            Track: 5777237168019658678,
                                        },
                                    },
                                    Key: "laudantium",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: true,
                            AqStrength: 55.099998,
                            BFrameCount: 3900125423141726672,
                            BPyramid: false,
                            BitrateBps: 8036740486091507589,
                            Codec: "quas",
                            CrfLevel: 5777567653806318439,
                            EnableTwoPass: true,
                            EntropyCoder: "hic",
                            FrameRate: 24.200001,
                            GopDuration: "est",
                            GopFrameCount: 941870249046490234,
                            HeightPixels: 5831655784923279160,
                            PixelFormat: "id",
                            Preset: "in",
                            Profile: "et",
                            RateControlMode: "ex",
                            Tune: "et",
                            VbvFullnessBits: 7637632028900458075,
                            VbvSizeBits: 2037966448394326988,
                            WidthPixels: 2646894192705066093,
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 2175462628246346410,
                            ChannelCount: 297477433783458039,
                            ChannelLayout: []string{
                                "praesentium",
                                "rerum",
                            },
                            Codec: "quia",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 3481608700231365311,
                                                    GainDb: 65.199997,
                                                    Key: "laudantium",
                                                    Track: 5299764554971715191,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 8523338627242323133,
                                                    GainDb: 98.099998,
                                                    Key: "repellat",
                                                    Track: 2785505916417397130,
                                                },
                                            },
                                        },
                                    },
                                    Key: "pariatur",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 6200029714616902191,
                                                    GainDb: 57.099998,
                                                    Key: "consequatur",
                                                    Track: 1764864795090790714,
                                                },
                                            },
                                        },
                                    },
                                    Key: "mollitia",
                                },
                            },
                            SampleRateHertz: 6858152412747553100,
                        },
                        Key: "consequuntur",
                        TextStream: &shared.TextStream{
                            Codec: "dignissimos",
                            LanguageCode: "omnis",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "omnis",
                                            Track: 7249554502572293192,
                                        },
                                        shared.TextInput{
                                            Key: "ea",
                                            Track: 6474862364296085590,
                                        },
                                        shared.TextInput{
                                            Key: "et",
                                            Track: 5421532260449508624,
                                        },
                                    },
                                    Key: "expedita",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "qui",
                                            Track: 2812557837829817962,
                                        },
                                    },
                                    Key: "harum",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 51.200001,
                            BFrameCount: 6499465947427648284,
                            BPyramid: false,
                            BitrateBps: 4394072065903903708,
                            Codec: "pariatur",
                            CrfLevel: 198383923240278535,
                            EnableTwoPass: true,
                            EntropyCoder: "excepturi",
                            FrameRate: 54.200001,
                            GopDuration: "est",
                            GopFrameCount: 507147130148723389,
                            HeightPixels: 1847499867871698081,
                            PixelFormat: "molestiae",
                            Preset: "aliquid",
                            Profile: "cumque",
                            RateControlMode: "eligendi",
                            Tune: "illo",
                            VbvFullnessBits: 3285786611908745006,
                            VbvSizeBits: 5837674451494487231,
                            WidthPixels: 7376835818306654268,
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 5254835311527650551,
                            ChannelCount: 618638227593423934,
                            ChannelLayout: []string{
                                "natus",
                            },
                            Codec: "assumenda",
                            Mapping: []shared.AudioAtom{
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 1550102887627660750,
                                                    GainDb: 13.200000,
                                                    Key: "amet",
                                                    Track: 8761158326617169446,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 3806089722923086097,
                                                    GainDb: 71.099998,
                                                    Key: "dolor",
                                                    Track: 3620715346454308914,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 5606586913743797701,
                                                    GainDb: 19.200001,
                                                    Key: "molestiae",
                                                    Track: 5026461116049516107,
                                                },
                                            },
                                        },
                                    },
                                    Key: "voluptatem",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 1931007679928274872,
                                                    GainDb: 8.100000,
                                                    Key: "illo",
                                                    Track: 6038489852382000601,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 6805489043616075585,
                                                    GainDb: 89.199997,
                                                    Key: "amet",
                                                    Track: 1983712868909254538,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 7090623359054561999,
                                                    GainDb: 78.099998,
                                                    Key: "officiis",
                                                    Track: 2258006334085005644,
                                                },
                                            },
                                        },
                                    },
                                    Key: "dolor",
                                },
                                shared.AudioAtom{
                                    Channels: []shared.AudioChannel{
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 6811690145861192755,
                                                    GainDb: 19.100000,
                                                    Key: "consequuntur",
                                                    Track: 5547248890629175117,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 275041606603644325,
                                                    GainDb: 39.200001,
                                                    Key: "et",
                                                    Track: 722196487128629634,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 2686624694400012392,
                                                    GainDb: 80.199997,
                                                    Key: "tenetur",
                                                    Track: 5996663048779118563,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 5517435185706000267,
                                                    GainDb: 26.200001,
                                                    Key: "dolore",
                                                    Track: 3086299933177726295,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 98151164713937414,
                                                    GainDb: 25.100000,
                                                    Key: "autem",
                                                    Track: 2264837974883159354,
                                                },
                                            },
                                        },
                                        shared.AudioChannel{
                                            Inputs: []shared.AudioChannelInput{
                                                shared.AudioChannelInput{
                                                    Channel: 7182033262120173632,
                                                    GainDb: 52.200001,
                                                    Key: "possimus",
                                                    Track: 8069343543629173355,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 7159620221507870079,
                                                    GainDb: 85.199997,
                                                    Key: "placeat",
                                                    Track: 9148794556669938938,
                                                },
                                                shared.AudioChannelInput{
                                                    Channel: 3204737655344859384,
                                                    GainDb: 32.200001,
                                                    Key: "quia",
                                                    Track: 488350748518843299,
                                                },
                                            },
                                        },
                                    },
                                    Key: "vel",
                                },
                            },
                            SampleRateHertz: 600866781365294959,
                        },
                        Key: "itaque",
                        TextStream: &shared.TextStream{
                            Codec: "tempora",
                            LanguageCode: "numquam",
                            Mapping: []shared.TextAtom{
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "aut",
                                            Track: 8286716488241228726,
                                        },
                                        shared.TextInput{
                                            Key: "quisquam",
                                            Track: 8975963734279439324,
                                        },
                                        shared.TextInput{
                                            Key: "rerum",
                                            Track: 5577562018468263370,
                                        },
                                    },
                                    Key: "enim",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "molestiae",
                                            Track: 3505220159369062803,
                                        },
                                        shared.TextInput{
                                            Key: "aliquam",
                                            Track: 5455730926175899108,
                                        },
                                        shared.TextInput{
                                            Key: "dolorem",
                                            Track: 5480272859319810661,
                                        },
                                    },
                                    Key: "nulla",
                                },
                                shared.TextAtom{
                                    Inputs: []shared.TextInput{
                                        shared.TextInput{
                                            Key: "nobis",
                                            Track: 1233937811060765209,
                                        },
                                        shared.TextInput{
                                            Key: "sint",
                                            Track: 4174710133125823427,
                                        },
                                    },
                                    Key: "voluptatibus",
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            AllowOpenGop: false,
                            AqStrength: 85.099998,
                            BFrameCount: 6145397149466860317,
                            BPyramid: false,
                            BitrateBps: 6122616281963670833,
                            Codec: "ut",
                            CrfLevel: 2426426714684721221,
                            EnableTwoPass: true,
                            EntropyCoder: "voluptas",
                            FrameRate: 67.199997,
                            GopDuration: "error",
                            GopFrameCount: 5195343144057218875,
                            HeightPixels: 1057414490650540317,
                            PixelFormat: "ipsam",
                            Preset: "eos",
                            Profile: "laudantium",
                            RateControlMode: "et",
                            Tune: "rerum",
                            VbvFullnessBits: 8483298005992723997,
                            VbvSizeBits: 4339071695621077707,
                            WidthPixels: 7906472585012995797,
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "magnam",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: true,
                                Lufs: 56.200001,
                            },
                            Color: &shared.Color{
                                Brightness: 15.200000,
                                Contrast: 77.199997,
                                Saturation: 60.099998,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 8504567749389466249,
                                LeftPixels: 3772564835262679942,
                                RightPixels: 4069001523908780280,
                                TopPixels: 6909159414537404227,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: true,
                                Strength: 15.100000,
                            },
                            Denoise: &shared.Denoise{
                                Strength: 70.199997,
                                Tune: "nam",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 4592332579569590678,
                                LeftPixels: 4961514989839935883,
                                RightPixels: 7386164499012083945,
                                TopPixels: 3662637623739135558,
                            },
                        },
                        URI: "incidunt",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "aspernatur",
                        MuxStreams: []string{
                            "vel",
                            "neque",
                        },
                        Type: "HLS",
                    },
                    shared.Manifest{
                        FileName: "excepturi",
                        MuxStreams: []string{
                            "veniam",
                            "laboriosam",
                        },
                        Type: "MANIFEST_TYPE_UNSPECIFIED",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "dolores",
                        ElementaryStreams: []string{
                            "minima",
                            "optio",
                            "quasi",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "quis",
                            },
                            Iv: "consectetur",
                            Key: "reiciendis",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "et",
                                Scheme: "voluptatem",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "fugiat",
                            },
                        },
                        FileName: "blanditiis",
                        Key: "nostrum",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "placeat",
                        },
                    },
                    shared.MuxStream{
                        Container: "nesciunt",
                        ElementaryStreams: []string{
                            "deserunt",
                            "culpa",
                        },
                        Encryption: &shared.Encryption{
                            Aes128: &shared.Aes128Encryption{
                                KeyURI: "enim",
                            },
                            Iv: "non",
                            Key: "qui",
                            MpegCenc: &shared.MpegCommonEncryption{
                                KeyID: "deserunt",
                                Scheme: "id",
                            },
                            SampleAes: &shared.SampleAesEncryption{
                                KeyURI: "sint",
                            },
                        },
                        FileName: "commodi",
                        Key: "voluptatibus",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "tempore",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "illum",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "voluptas",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "ut",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "libero",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 18.200001,
                                        Y: 62.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "sapiente",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 48.099998,
                                        Y: 87.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "eos",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "totam",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "sunt",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 82.199997,
                                        Y: 83.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "officiis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 66.099998,
                                        Y: 8.200000,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "architecto",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "excepturi",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "voluptas",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 45.200001,
                                        Y: 22.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "impedit",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 85.199997,
                                        Y: 77.199997,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 68.199997,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 37.099998,
                                Y: 95.199997,
                            },
                            URI: "aliquid",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "eum",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "quo",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 90.099998,
                                        Y: 13.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "totam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 53.200001,
                                        Y: 74.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "architecto",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "ea",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "officiis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 76.099998,
                                        Y: 20.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "atque",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 85.099998,
                                        Y: 37.200001,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 63.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 8.100000,
                                Y: 61.099998,
                            },
                            URI: "quas",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "facilis",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "praesentium",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "nam",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 60.200001,
                                        Y: 92.199997,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "officiis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 46.099998,
                                        Y: 88.199997,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "labore",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "omnis",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "voluptates",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 92.099998,
                                        Y: 62.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "voluptas",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 75.099998,
                                        Y: 5.200000,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "ea",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "necessitatibus",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "autem",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 71.199997,
                                        Y: 31.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "unde",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 7.200000,
                                        Y: 41.099998,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 28.200001,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 89.099998,
                                Y: 84.199997,
                            },
                            URI: "consequuntur",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "harum",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 7367980966566239874,
                        EndTimeOffset: "et",
                        FilePrefix: "aut",
                        Format: "dolor",
                        Interval: "animi",
                        Quality: 3852654797285311642,
                        RowCount: 3710639359179144155,
                        SpriteHeightPixels: 2350620641611697633,
                        SpriteWidthPixels: 7465609672034484250,
                        StartTimeOffset: "velit",
                        TotalCount: 4744398683267899403,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 4693265585069024929,
                        EndTimeOffset: "neque",
                        FilePrefix: "qui",
                        Format: "est",
                        Interval: "et",
                        Quality: 8527444148889935096,
                        RowCount: 3737846910194129806,
                        SpriteHeightPixels: 8015391903902252113,
                        SpriteWidthPixels: 5197845468398624637,
                        StartTimeOffset: "deleniti",
                        TotalCount: 5244653917212637213,
                    },
                    shared.SpriteSheet{
                        ColumnCount: 5991508761271416567,
                        EndTimeOffset: "sed",
                        FilePrefix: "occaecati",
                        Format: "qui",
                        Interval: "aut",
                        Quality: 7223508839305653133,
                        RowCount: 3708959879963337829,
                        SpriteHeightPixels: 970393771523591801,
                        SpriteWidthPixels: 6174198661297947669,
                        StartTimeOffset: "itaque",
                        TotalCount: 5478790927234200121,
                    },
                },
            },
            Name: "nobis",
        },
    }
    
    res, err := s.Projects.TranscoderProjectsLocationsJobTemplatesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.JobTemplate != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `TranscoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `TranscoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `TranscoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `TranscoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `TranscoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `TranscoderProjectsLocationsJobsList` - Lists jobs in the specified region.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
