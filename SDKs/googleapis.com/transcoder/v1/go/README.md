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
            Parent: "velit",
        },
        QueryParams: operations.TranscoderProjectsLocationsJobTemplatesCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "quam",
            Alt: "proto",
            Callback: "et",
            Fields: "quae",
            JobTemplateID: "numquam",
            Key: "deserunt",
            OauthToken: "magni",
            PrettyPrint: false,
            QuotaUser: "rem",
            UploadType: "natus",
            UploadProtocol: "non",
        },
        Request: &shared.JobTemplate{
            Config: &shared.JobConfig{
                AdBreaks: []shared.AdBreak{
                    shared.AdBreak{
                        StartTimeOffset: "veritatis",
                    },
                    shared.AdBreak{
                        StartTimeOffset: "in",
                    },
                },
                EditList: []shared.EditAtom{
                    shared.EditAtom{
                        EndTimeOffset: "sed",
                        Inputs: []string{
                            "totam",
                            "non",
                        },
                        Key: "id",
                        StartTimeOffset: "et",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "sunt",
                        Inputs: []string{
                            "voluptatem",
                            "aut",
                        },
                        Key: "voluptas",
                        StartTimeOffset: "molestias",
                    },
                    shared.EditAtom{
                        EndTimeOffset: "veniam",
                        Inputs: []string{
                            "maiores",
                            "similique",
                        },
                        Key: "voluptas",
                        StartTimeOffset: "nam",
                    },
                },
                ElementaryStreams: []shared.ElementaryStream{
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 8734585012694364174,
                            ChannelCount: 302701263639282980,
                            ChannelLayout: []string{
                                "non",
                            },
                            Codec: "assumenda",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "totam",
                                    GainDb: 41.200001,
                                    InputChannel: 3889859964007069983,
                                    InputKey: "ut",
                                    InputTrack: 429568001705639979,
                                    OutputChannel: 4790094469021478001,
                                },
                                shared.AudioMapping{
                                    AtomKey: "voluptatem",
                                    GainDb: 0.100000,
                                    InputChannel: 3386977228252052151,
                                    InputKey: "et",
                                    InputTrack: 4749023452396188290,
                                    OutputChannel: 7209998907851742008,
                                },
                            },
                            SampleRateHertz: 1000734223704238467,
                        },
                        Key: "quia",
                        TextStream: &shared.TextStream{
                            Codec: "amet",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "nam",
                                    InputKey: "voluptatem",
                                    InputTrack: 4357314511518688067,
                                },
                                shared.TextMapping{
                                    AtomKey: "animi",
                                    InputKey: "sint",
                                    InputTrack: 18276512334062614,
                                },
                                shared.TextMapping{
                                    AtomKey: "adipisci",
                                    InputKey: "ipsam",
                                    InputTrack: 7801238710911106663,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 86.199997,
                                BFrameCount: 3841418896324507954,
                                BPyramid: false,
                                BitrateBps: 7939843431524110287,
                                CrfLevel: 5604047076731267492,
                                EnableTwoPass: false,
                                EntropyCoder: "suscipit",
                                FrameRate: 94.199997,
                                GopDuration: "aut",
                                GopFrameCount: 5297468219697682067,
                                HeightPixels: 7320174327465118610,
                                PixelFormat: "quas",
                                Preset: "voluptatem",
                                Profile: "molestias",
                                RateControlMode: "distinctio",
                                Tune: "numquam",
                                VbvFullnessBits: 4036590877193529035,
                                VbvSizeBits: 7945324405830295443,
                                WidthPixels: 9054588558227671414,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 31.200001,
                                BFrameCount: 1749839644806246279,
                                BPyramid: true,
                                BitrateBps: 5719770852229404212,
                                CrfLevel: 2217828989481701641,
                                EnableTwoPass: false,
                                FrameRate: 3.100000,
                                GopDuration: "ad",
                                GopFrameCount: 7009282973790538030,
                                HeightPixels: 1156906710511097297,
                                PixelFormat: "nihil",
                                Preset: "reiciendis",
                                Profile: "temporibus",
                                RateControlMode: "qui",
                                Tune: "assumenda",
                                VbvFullnessBits: 1743758268169687798,
                                VbvSizeBits: 9219256572541687904,
                                WidthPixels: 5461161769940535317,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 8164515141570333763,
                                CrfLevel: 3206806895282513228,
                                FrameRate: 93.099998,
                                GopDuration: "exercitationem",
                                GopFrameCount: 5378782561829875083,
                                HeightPixels: 498773123605452739,
                                PixelFormat: "minima",
                                Profile: "veritatis",
                                RateControlMode: "fugit",
                                WidthPixels: 5042047820796143962,
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 3929284748488642302,
                            ChannelCount: 2686214226691111320,
                            ChannelLayout: []string{
                                "error",
                                "sint",
                            },
                            Codec: "similique",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "inventore",
                                    GainDb: 80.199997,
                                    InputChannel: 3645845174871931131,
                                    InputKey: "repellat",
                                    InputTrack: 590147102868723875,
                                    OutputChannel: 2741661563563306428,
                                },
                                shared.AudioMapping{
                                    AtomKey: "et",
                                    GainDb: 40.200001,
                                    InputChannel: 4568007762997890894,
                                    InputKey: "enim",
                                    InputTrack: 7623676297343562525,
                                    OutputChannel: 6189061385880190931,
                                },
                                shared.AudioMapping{
                                    AtomKey: "quia",
                                    GainDb: 84.099998,
                                    InputChannel: 2728785083707327611,
                                    InputKey: "non",
                                    InputTrack: 87046029318097088,
                                    OutputChannel: 1123586898069181084,
                                },
                            },
                            SampleRateHertz: 242067450589637029,
                        },
                        Key: "illo",
                        TextStream: &shared.TextStream{
                            Codec: "amet",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "et",
                                    InputKey: "ut",
                                    InputTrack: 1548975094613114682,
                                },
                                shared.TextMapping{
                                    AtomKey: "placeat",
                                    InputKey: "sed",
                                    InputTrack: 9104995226837995035,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 68.199997,
                                BFrameCount: 5269888639481747991,
                                BPyramid: true,
                                BitrateBps: 802538912262181060,
                                CrfLevel: 568369648590947085,
                                EnableTwoPass: false,
                                EntropyCoder: "nihil",
                                FrameRate: 99.099998,
                                GopDuration: "dolore",
                                GopFrameCount: 7715826000470371826,
                                HeightPixels: 4378772694192042422,
                                PixelFormat: "aliquam",
                                Preset: "officiis",
                                Profile: "optio",
                                RateControlMode: "nesciunt",
                                Tune: "id",
                                VbvFullnessBits: 8241421119188199864,
                                VbvSizeBits: 4143091955056473429,
                                WidthPixels: 4394854628797621424,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 75.099998,
                                BFrameCount: 3112450380192338120,
                                BPyramid: true,
                                BitrateBps: 3212852262188618094,
                                CrfLevel: 1388264946705498720,
                                EnableTwoPass: true,
                                FrameRate: 66.199997,
                                GopDuration: "officia",
                                GopFrameCount: 7399963429881155323,
                                HeightPixels: 6818519795700176993,
                                PixelFormat: "quo",
                                Preset: "distinctio",
                                Profile: "officia",
                                RateControlMode: "sint",
                                Tune: "iste",
                                VbvFullnessBits: 392158597907929278,
                                VbvSizeBits: 2504399068614208102,
                                WidthPixels: 6028572998086476129,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 2063249434314123619,
                                CrfLevel: 7918130817802109633,
                                FrameRate: 16.200001,
                                GopDuration: "suscipit",
                                GopFrameCount: 8218359302734002594,
                                HeightPixels: 588073027692361460,
                                PixelFormat: "qui",
                                Profile: "earum",
                                RateControlMode: "voluptatum",
                                WidthPixels: 4485477193987646007,
                            },
                        },
                    },
                    shared.ElementaryStream{
                        AudioStream: &shared.AudioStream{
                            BitrateBps: 8402336689532682306,
                            ChannelCount: 7647680398198231575,
                            ChannelLayout: []string{
                                "eligendi",
                                "id",
                            },
                            Codec: "aut",
                            Mapping: []shared.AudioMapping{
                                shared.AudioMapping{
                                    AtomKey: "praesentium",
                                    GainDb: 29.200001,
                                    InputChannel: 8321376229948355446,
                                    InputKey: "ut",
                                    InputTrack: 959802031382052165,
                                    OutputChannel: 1214262551526982576,
                                },
                                shared.AudioMapping{
                                    AtomKey: "ratione",
                                    GainDb: 52.200001,
                                    InputChannel: 5876030672547755157,
                                    InputKey: "ipsa",
                                    InputTrack: 1885012052023597816,
                                    OutputChannel: 4127993684334626263,
                                },
                            },
                            SampleRateHertz: 1640789388345126256,
                        },
                        Key: "sed",
                        TextStream: &shared.TextStream{
                            Codec: "sapiente",
                            Mapping: []shared.TextMapping{
                                shared.TextMapping{
                                    AtomKey: "unde",
                                    InputKey: "repellat",
                                    InputTrack: 1602945392460790129,
                                },
                                shared.TextMapping{
                                    AtomKey: "non",
                                    InputKey: "est",
                                    InputTrack: 5586104001001354351,
                                },
                            },
                        },
                        VideoStream: &shared.VideoStream{
                            H264: &shared.H264CodecSettings{
                                AllowOpenGop: true,
                                AqStrength: 6.200000,
                                BFrameCount: 3283142419460839713,
                                BPyramid: false,
                                BitrateBps: 5281713157585046619,
                                CrfLevel: 7733002441376951230,
                                EnableTwoPass: true,
                                EntropyCoder: "voluptates",
                                FrameRate: 53.200001,
                                GopDuration: "qui",
                                GopFrameCount: 831723543712814911,
                                HeightPixels: 411614886395256957,
                                PixelFormat: "atque",
                                Preset: "minima",
                                Profile: "porro",
                                RateControlMode: "dolorem",
                                Tune: "et",
                                VbvFullnessBits: 5887184027869204886,
                                VbvSizeBits: 1635229212842713520,
                                WidthPixels: 5060867259184677518,
                            },
                            H265: &shared.H265CodecSettings{
                                AllowOpenGop: false,
                                AqStrength: 23.100000,
                                BFrameCount: 5305597144890785549,
                                BPyramid: true,
                                BitrateBps: 6965659755888807060,
                                CrfLevel: 7013263175760477862,
                                EnableTwoPass: false,
                                FrameRate: 39.099998,
                                GopDuration: "qui",
                                GopFrameCount: 3687438973040014816,
                                HeightPixels: 8086079741019364905,
                                PixelFormat: "qui",
                                Preset: "corporis",
                                Profile: "dolorem",
                                RateControlMode: "at",
                                Tune: "nesciunt",
                                VbvFullnessBits: 557220476685422978,
                                VbvSizeBits: 7873058198823816717,
                                WidthPixels: 7268282757941392214,
                            },
                            Vp9: &shared.Vp9CodecSettings{
                                BitrateBps: 8955634575045901885,
                                CrfLevel: 9142074952729957239,
                                FrameRate: 45.200001,
                                GopDuration: "qui",
                                GopFrameCount: 8814807336944713353,
                                HeightPixels: 7295268869745193438,
                                PixelFormat: "libero",
                                Profile: "et",
                                RateControlMode: "doloremque",
                                WidthPixels: 8087097581717723326,
                            },
                        },
                    },
                },
                Inputs: []shared.Input{
                    shared.Input{
                        Key: "ratione",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: false,
                                Lufs: 34.099998,
                            },
                            Color: &shared.Color{
                                Brightness: 7.200000,
                                Contrast: 53.200001,
                                Saturation: 11.200000,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 4737043999706933419,
                                LeftPixels: 4968549698319254635,
                                RightPixels: 9115460186079630327,
                                TopPixels: 8080282138260317142,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: false,
                                Strength: 61.099998,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: true,
                                    Mode: "voluptas",
                                    Parity: "non",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: true,
                                    DisableSpatialInterlacing: true,
                                    Mode: "harum",
                                    Parity: "atque",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 25.100000,
                                Tune: "nesciunt",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 4067222969291303946,
                                LeftPixels: 3089208062786954445,
                                RightPixels: 1945268195522693184,
                                TopPixels: 2859159837115009773,
                            },
                        },
                        URI: "nisi",
                    },
                    shared.Input{
                        Key: "iste",
                        PreprocessingConfig: &shared.PreprocessingConfig{
                            Audio: &shared.Audio{
                                HighBoost: true,
                                LowBoost: false,
                                Lufs: 25.100000,
                            },
                            Color: &shared.Color{
                                Brightness: 10.200000,
                                Contrast: 22.100000,
                                Saturation: 63.099998,
                            },
                            Crop: &shared.Crop{
                                BottomPixels: 7332610496941734356,
                                LeftPixels: 5443945459485265932,
                                RightPixels: 7568492041520297667,
                                TopPixels: 3157484068396623756,
                            },
                            Deblock: &shared.Deblock{
                                Enabled: true,
                                Strength: 29.100000,
                            },
                            Deinterlace: &shared.Deinterlace{
                                Bwdif: &shared.BwdifConfig{
                                    DeinterlaceAllFrames: true,
                                    Mode: "non",
                                    Parity: "voluptate",
                                },
                                Yadif: &shared.YadifConfig{
                                    DeinterlaceAllFrames: false,
                                    DisableSpatialInterlacing: true,
                                    Mode: "culpa",
                                    Parity: "expedita",
                                },
                            },
                            Denoise: &shared.Denoise{
                                Strength: 59.099998,
                                Tune: "possimus",
                            },
                            Pad: &shared.Pad{
                                BottomPixels: 3436104069359179590,
                                LeftPixels: 3843084449304307966,
                                RightPixels: 1312761340097649485,
                                TopPixels: 433292245493960788,
                            },
                        },
                        URI: "facere",
                    },
                },
                Manifests: []shared.Manifest{
                    shared.Manifest{
                        FileName: "veritatis",
                        MuxStreams: []string{
                            "similique",
                            "placeat",
                            "laudantium",
                        },
                        Type: "HLS",
                    },
                    shared.Manifest{
                        FileName: "impedit",
                        MuxStreams: []string{
                            "nihil",
                            "aut",
                        },
                        Type: "DASH",
                    },
                    shared.Manifest{
                        FileName: "voluptas",
                        MuxStreams: []string{
                            "non",
                        },
                        Type: "HLS",
                    },
                },
                MuxStreams: []shared.MuxStream{
                    shared.MuxStream{
                        Container: "nulla",
                        ElementaryStreams: []string{
                            "facilis",
                            "eveniet",
                            "et",
                        },
                        FileName: "et",
                        Key: "culpa",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "consequatur",
                        },
                    },
                    shared.MuxStream{
                        Container: "nisi",
                        ElementaryStreams: []string{
                            "esse",
                            "consequatur",
                        },
                        FileName: "quo",
                        Key: "et",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: false,
                            SegmentDuration: "vitae",
                        },
                    },
                    shared.MuxStream{
                        Container: "quia",
                        ElementaryStreams: []string{
                            "commodi",
                        },
                        FileName: "fuga",
                        Key: "asperiores",
                        SegmentSettings: &shared.SegmentSettings{
                            IndividualSegments: true,
                            SegmentDuration: "veniam",
                        },
                    },
                },
                Output: &shared.Output{
                    URI: "consequatur",
                },
                Overlays: []shared.Overlay{
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "consectetur",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "at",
                                    FadeType: "FADE_OUT",
                                    StartTimeOffset: "enim",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 98.199997,
                                        Y: 57.200001,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "necessitatibus",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 85.099998,
                                        Y: 52.200001,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "ut",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "velit",
                                    FadeType: "FADE_IN",
                                    StartTimeOffset: "quae",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 49.200001,
                                        Y: 10.100000,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "alias",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 68.199997,
                                        Y: 19.200001,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 97.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 15.100000,
                                Y: 5.200000,
                            },
                            URI: "ipsa",
                        },
                    },
                    shared.Overlay{
                        Animations: []shared.Animation{
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "error",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "modi",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "et",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 12.200000,
                                        Y: 37.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "libero",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 97.199997,
                                        Y: 93.099998,
                                    },
                                },
                            },
                            shared.Animation{
                                AnimationEnd: &shared.AnimationEnd{
                                    StartTimeOffset: "repudiandae",
                                },
                                AnimationFade: &shared.AnimationFade{
                                    EndTimeOffset: "esse",
                                    FadeType: "FADE_TYPE_UNSPECIFIED",
                                    StartTimeOffset: "facilis",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 71.099998,
                                        Y: 51.099998,
                                    },
                                },
                                AnimationStatic: &shared.AnimationStatic{
                                    StartTimeOffset: "aut",
                                    Xy: &shared.NormalizedCoordinate{
                                        X: 17.100000,
                                        Y: 49.200001,
                                    },
                                },
                            },
                        },
                        Image: &shared.Image{
                            Alpha: 70.099998,
                            Resolution: &shared.NormalizedCoordinate{
                                X: 33.099998,
                                Y: 40.099998,
                            },
                            URI: "ea",
                        },
                    },
                },
                PubsubDestination: &shared.PubsubDestination{
                    Topic: "placeat",
                },
                SpriteSheets: []shared.SpriteSheet{
                    shared.SpriteSheet{
                        ColumnCount: 1272736995480537983,
                        EndTimeOffset: "itaque",
                        FilePrefix: "cumque",
                        Format: "eos",
                        Interval: "et",
                        Quality: 6569622695271555726,
                        RowCount: 5479443683048647611,
                        SpriteHeightPixels: 8679056765873583647,
                        SpriteWidthPixels: 7007488209292830384,
                        StartTimeOffset: "eaque",
                        TotalCount: 6810658305575331346,
                    },
                },
            },
            Labels: map[string]string{
                "minima": "accusamus",
                "explicabo": "qui",
            },
            Name: "enim",
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
