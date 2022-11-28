# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { TranscoderProjectsLocationsJobTemplatesCreateRequest, TranscoderProjectsLocationsJobTemplatesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: TranscoderProjectsLocationsJobTemplatesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "perferendis",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "sint",
    alt: "media",
    callback: "est",
    fields: "ad",
    jobTemplateId: "quis",
    key: "ipsa",
    oauthToken: "pariatur",
    prettyPrint: false,
    quotaUser: "non",
    uploadType: "quia",
    uploadProtocol: "non",
  },
  request: {
    config: {
      adBreaks: [
        {
          startTimeOffset: "quas",
        },
        {
          startTimeOffset: "labore",
        },
        {
          startTimeOffset: "nulla",
        },
      ],
      editList: [
        {
          endTimeOffset: "autem",
          inputs: [
            "rem",
          ],
          key: "ut",
          startTimeOffset: "in",
        },
        {
          endTimeOffset: "iure",
          inputs: [
            "aliquam",
            "necessitatibus",
          ],
          key: "architecto",
          startTimeOffset: "repellendus",
        },
        {
          endTimeOffset: "laudantium",
          inputs: [
            "voluptas",
            "eum",
          ],
          key: "deserunt",
          startTimeOffset: "et",
        },
      ],
      elementaryStreams: [
        {
          audioStream: {
            bitrateBps: 4097474899540328250,
            channelCount: 2543231146263007955,
            channelLayout: [
              "cumque",
              "harum",
            ],
            codec: "sequi",
            mapping: [
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 7797162079634821085,
                        gainDb: 27.200001,
                        key: "sunt",
                        track: 3365752909053860324,
                      },
                      {
                        channel: 2518647374994685705,
                        gainDb: 66.199997,
                        key: "qui",
                        track: 4323586530958414898,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 340400890369386520,
                        gainDb: 58.200001,
                        key: "nihil",
                        track: 304033318772208543,
                      },
                      {
                        channel: 3224842635320094065,
                        gainDb: 31.200001,
                        key: "provident",
                        track: 1212164163157738645,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 8856497738629359737,
                        gainDb: 18.200001,
                        key: "aut",
                        track: 3310331092033621059,
                      },
                      {
                        channel: 6152792843170689862,
                        gainDb: 48.099998,
                        key: "saepe",
                        track: 412640562849164214,
                      },
                    ],
                  },
                ],
                key: "unde",
              },
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 7806191432418906498,
                        gainDb: 23.100000,
                        key: "eum",
                        track: 122103816252635459,
                      },
                      {
                        channel: 2170726881679182695,
                        gainDb: 10.200000,
                        key: "repellendus",
                        track: 6482989379889661701,
                      },
                    ],
                  },
                ],
                key: "quia",
              },
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 1650361670742805926,
                        gainDb: 12.200000,
                        key: "iste",
                        track: 8526777569553152952,
                      },
                      {
                        channel: 6300043633116788809,
                        gainDb: 82.099998,
                        key: "hic",
                        track: 1680912952135509319,
                      },
                    ],
                  },
                ],
                key: "saepe",
              },
            ],
            sampleRateHertz: 9124019767510034173,
          },
          key: "placeat",
          textStream: {
            codec: "quos",
            languageCode: "repellat",
            mapping: [
              {
                inputs: [
                  {
                    key: "iusto",
                    track: 7875554111815946629,
                  },
                  {
                    key: "amet",
                    track: 4657902838894521576,
                  },
                ],
                key: "earum",
              },
              {
                inputs: [
                  {
                    key: "nobis",
                    track: 734580936732778662,
                  },
                  {
                    key: "laboriosam",
                    track: 4838287299199827112,
                  },
                  {
                    key: "iure",
                    track: 5777237168019658678,
                  },
                ],
                key: "laudantium",
              },
            ],
          },
          videoStream: {
            allowOpenGop: true,
            aqStrength: 55.099998,
            bFrameCount: 3900125423141726672,
            bPyramid: false,
            bitrateBps: 8036740486091507589,
            codec: "quas",
            crfLevel: 5777567653806318439,
            enableTwoPass: true,
            entropyCoder: "hic",
            frameRate: 24.200001,
            gopDuration: "est",
            gopFrameCount: 941870249046490234,
            heightPixels: 5831655784923279160,
            pixelFormat: "id",
            preset: "in",
            profile: "et",
            rateControlMode: "ex",
            tune: "et",
            vbvFullnessBits: 7637632028900458075,
            vbvSizeBits: 2037966448394326988,
            widthPixels: 2646894192705066093,
          },
        },
        {
          audioStream: {
            bitrateBps: 2175462628246346410,
            channelCount: 297477433783458039,
            channelLayout: [
              "praesentium",
              "rerum",
            ],
            codec: "quia",
            mapping: [
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 3481608700231365311,
                        gainDb: 65.199997,
                        key: "laudantium",
                        track: 5299764554971715191,
                      },
                      {
                        channel: 8523338627242323133,
                        gainDb: 98.099998,
                        key: "repellat",
                        track: 2785505916417397130,
                      },
                    ],
                  },
                ],
                key: "pariatur",
              },
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 6200029714616902191,
                        gainDb: 57.099998,
                        key: "consequatur",
                        track: 1764864795090790714,
                      },
                    ],
                  },
                ],
                key: "mollitia",
              },
            ],
            sampleRateHertz: 6858152412747553100,
          },
          key: "consequuntur",
          textStream: {
            codec: "dignissimos",
            languageCode: "omnis",
            mapping: [
              {
                inputs: [
                  {
                    key: "omnis",
                    track: 7249554502572293192,
                  },
                  {
                    key: "ea",
                    track: 6474862364296085590,
                  },
                  {
                    key: "et",
                    track: 5421532260449508624,
                  },
                ],
                key: "expedita",
              },
              {
                inputs: [
                  {
                    key: "qui",
                    track: 2812557837829817962,
                  },
                ],
                key: "harum",
              },
            ],
          },
          videoStream: {
            allowOpenGop: false,
            aqStrength: 51.200001,
            bFrameCount: 6499465947427648284,
            bPyramid: false,
            bitrateBps: 4394072065903903708,
            codec: "pariatur",
            crfLevel: 198383923240278535,
            enableTwoPass: true,
            entropyCoder: "excepturi",
            frameRate: 54.200001,
            gopDuration: "est",
            gopFrameCount: 507147130148723389,
            heightPixels: 1847499867871698081,
            pixelFormat: "molestiae",
            preset: "aliquid",
            profile: "cumque",
            rateControlMode: "eligendi",
            tune: "illo",
            vbvFullnessBits: 3285786611908745006,
            vbvSizeBits: 5837674451494487231,
            widthPixels: 7376835818306654268,
          },
        },
        {
          audioStream: {
            bitrateBps: 5254835311527650551,
            channelCount: 618638227593423934,
            channelLayout: [
              "natus",
            ],
            codec: "assumenda",
            mapping: [
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 1550102887627660750,
                        gainDb: 13.200000,
                        key: "amet",
                        track: 8761158326617169446,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 3806089722923086097,
                        gainDb: 71.099998,
                        key: "dolor",
                        track: 3620715346454308914,
                      },
                      {
                        channel: 5606586913743797701,
                        gainDb: 19.200001,
                        key: "molestiae",
                        track: 5026461116049516107,
                      },
                    ],
                  },
                ],
                key: "voluptatem",
              },
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 1931007679928274872,
                        gainDb: 8.100000,
                        key: "illo",
                        track: 6038489852382000601,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 6805489043616075585,
                        gainDb: 89.199997,
                        key: "amet",
                        track: 1983712868909254538,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 7090623359054561999,
                        gainDb: 78.099998,
                        key: "officiis",
                        track: 2258006334085005644,
                      },
                    ],
                  },
                ],
                key: "dolor",
              },
              {
                channels: [
                  {
                    inputs: [
                      {
                        channel: 6811690145861192755,
                        gainDb: 19.100000,
                        key: "consequuntur",
                        track: 5547248890629175117,
                      },
                      {
                        channel: 275041606603644325,
                        gainDb: 39.200001,
                        key: "et",
                        track: 722196487128629634,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 2686624694400012392,
                        gainDb: 80.199997,
                        key: "tenetur",
                        track: 5996663048779118563,
                      },
                      {
                        channel: 5517435185706000267,
                        gainDb: 26.200001,
                        key: "dolore",
                        track: 3086299933177726295,
                      },
                      {
                        channel: 98151164713937414,
                        gainDb: 25.100000,
                        key: "autem",
                        track: 2264837974883159354,
                      },
                    ],
                  },
                  {
                    inputs: [
                      {
                        channel: 7182033262120173632,
                        gainDb: 52.200001,
                        key: "possimus",
                        track: 8069343543629173355,
                      },
                      {
                        channel: 7159620221507870079,
                        gainDb: 85.199997,
                        key: "placeat",
                        track: 9148794556669938938,
                      },
                      {
                        channel: 3204737655344859384,
                        gainDb: 32.200001,
                        key: "quia",
                        track: 488350748518843299,
                      },
                    ],
                  },
                ],
                key: "vel",
              },
            ],
            sampleRateHertz: 600866781365294959,
          },
          key: "itaque",
          textStream: {
            codec: "tempora",
            languageCode: "numquam",
            mapping: [
              {
                inputs: [
                  {
                    key: "aut",
                    track: 8286716488241228726,
                  },
                  {
                    key: "quisquam",
                    track: 8975963734279439324,
                  },
                  {
                    key: "rerum",
                    track: 5577562018468263370,
                  },
                ],
                key: "enim",
              },
              {
                inputs: [
                  {
                    key: "molestiae",
                    track: 3505220159369062803,
                  },
                  {
                    key: "aliquam",
                    track: 5455730926175899108,
                  },
                  {
                    key: "dolorem",
                    track: 5480272859319810661,
                  },
                ],
                key: "nulla",
              },
              {
                inputs: [
                  {
                    key: "nobis",
                    track: 1233937811060765209,
                  },
                  {
                    key: "sint",
                    track: 4174710133125823427,
                  },
                ],
                key: "voluptatibus",
              },
            ],
          },
          videoStream: {
            allowOpenGop: false,
            aqStrength: 85.099998,
            bFrameCount: 6145397149466860317,
            bPyramid: false,
            bitrateBps: 6122616281963670833,
            codec: "ut",
            crfLevel: 2426426714684721221,
            enableTwoPass: true,
            entropyCoder: "voluptas",
            frameRate: 67.199997,
            gopDuration: "error",
            gopFrameCount: 5195343144057218875,
            heightPixels: 1057414490650540317,
            pixelFormat: "ipsam",
            preset: "eos",
            profile: "laudantium",
            rateControlMode: "et",
            tune: "rerum",
            vbvFullnessBits: 8483298005992723997,
            vbvSizeBits: 4339071695621077707,
            widthPixels: 7906472585012995797,
          },
        },
      ],
      inputs: [
        {
          key: "magnam",
          preprocessingConfig: {
            audio: {
              highBoost: true,
              lowBoost: true,
              lufs: 56.200001,
            },
            color: {
              brightness: 15.200000,
              contrast: 77.199997,
              saturation: 60.099998,
            },
            crop: {
              bottomPixels: 8504567749389466249,
              leftPixels: 3772564835262679942,
              rightPixels: 4069001523908780280,
              topPixels: 6909159414537404227,
            },
            deblock: {
              enabled: true,
              strength: 15.100000,
            },
            denoise: {
              strength: 70.199997,
              tune: "nam",
            },
            pad: {
              bottomPixels: 4592332579569590678,
              leftPixels: 4961514989839935883,
              rightPixels: 7386164499012083945,
              topPixels: 3662637623739135558,
            },
          },
          uri: "incidunt",
        },
      ],
      manifests: [
        {
          fileName: "aspernatur",
          muxStreams: [
            "vel",
            "neque",
          ],
          type: "HLS",
        },
        {
          fileName: "excepturi",
          muxStreams: [
            "veniam",
            "laboriosam",
          ],
          type: "MANIFEST_TYPE_UNSPECIFIED",
        },
      ],
      muxStreams: [
        {
          container: "dolores",
          elementaryStreams: [
            "minima",
            "optio",
            "quasi",
          ],
          encryption: {
            aes128: {
              keyUri: "quis",
            },
            iv: "consectetur",
            key: "reiciendis",
            mpegCenc: {
              keyId: "et",
              scheme: "voluptatem",
            },
            sampleAes: {
              keyUri: "fugiat",
            },
          },
          fileName: "blanditiis",
          key: "nostrum",
          segmentSettings: {
            individualSegments: true,
            segmentDuration: "placeat",
          },
        },
        {
          container: "nesciunt",
          elementaryStreams: [
            "deserunt",
            "culpa",
          ],
          encryption: {
            aes128: {
              keyUri: "enim",
            },
            iv: "non",
            key: "qui",
            mpegCenc: {
              keyId: "deserunt",
              scheme: "id",
            },
            sampleAes: {
              keyUri: "sint",
            },
          },
          fileName: "commodi",
          key: "voluptatibus",
          segmentSettings: {
            individualSegments: true,
            segmentDuration: "tempore",
          },
        },
      ],
      output: {
        uri: "illum",
      },
      overlays: [
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "voluptas",
              },
              animationFade: {
                endTimeOffset: "ut",
                fadeType: "FADE_IN",
                startTimeOffset: "libero",
                xy: {
                  x: 18.200001,
                  y: 62.099998,
                },
              },
              animationStatic: {
                startTimeOffset: "sapiente",
                xy: {
                  x: 48.099998,
                  y: 87.199997,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "eos",
              },
              animationFade: {
                endTimeOffset: "totam",
                fadeType: "FADE_TYPE_UNSPECIFIED",
                startTimeOffset: "sunt",
                xy: {
                  x: 82.199997,
                  y: 83.199997,
                },
              },
              animationStatic: {
                startTimeOffset: "officiis",
                xy: {
                  x: 66.099998,
                  y: 8.200000,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "architecto",
              },
              animationFade: {
                endTimeOffset: "excepturi",
                fadeType: "FADE_IN",
                startTimeOffset: "voluptas",
                xy: {
                  x: 45.200001,
                  y: 22.200001,
                },
              },
              animationStatic: {
                startTimeOffset: "impedit",
                xy: {
                  x: 85.199997,
                  y: 77.199997,
                },
              },
            },
          ],
          image: {
            alpha: 68.199997,
            resolution: {
              x: 37.099998,
              y: 95.199997,
            },
            uri: "aliquid",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "eum",
              },
              animationFade: {
                endTimeOffset: "quo",
                fadeType: "FADE_TYPE_UNSPECIFIED",
                startTimeOffset: "et",
                xy: {
                  x: 90.099998,
                  y: 13.100000,
                },
              },
              animationStatic: {
                startTimeOffset: "totam",
                xy: {
                  x: 53.200001,
                  y: 74.199997,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "architecto",
              },
              animationFade: {
                endTimeOffset: "ea",
                fadeType: "FADE_IN",
                startTimeOffset: "officiis",
                xy: {
                  x: 76.099998,
                  y: 20.100000,
                },
              },
              animationStatic: {
                startTimeOffset: "atque",
                xy: {
                  x: 85.099998,
                  y: 37.200001,
                },
              },
            },
          ],
          image: {
            alpha: 63.099998,
            resolution: {
              x: 8.100000,
              y: 61.099998,
            },
            uri: "quas",
          },
        },
        {
          animations: [
            {
              animationEnd: {
                startTimeOffset: "facilis",
              },
              animationFade: {
                endTimeOffset: "praesentium",
                fadeType: "FADE_OUT",
                startTimeOffset: "nam",
                xy: {
                  x: 60.200001,
                  y: 92.199997,
                },
              },
              animationStatic: {
                startTimeOffset: "officiis",
                xy: {
                  x: 46.099998,
                  y: 88.199997,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "labore",
              },
              animationFade: {
                endTimeOffset: "omnis",
                fadeType: "FADE_IN",
                startTimeOffset: "voluptates",
                xy: {
                  x: 92.099998,
                  y: 62.200001,
                },
              },
              animationStatic: {
                startTimeOffset: "voluptas",
                xy: {
                  x: 75.099998,
                  y: 5.200000,
                },
              },
            },
            {
              animationEnd: {
                startTimeOffset: "ea",
              },
              animationFade: {
                endTimeOffset: "necessitatibus",
                fadeType: "FADE_TYPE_UNSPECIFIED",
                startTimeOffset: "autem",
                xy: {
                  x: 71.199997,
                  y: 31.200001,
                },
              },
              animationStatic: {
                startTimeOffset: "unde",
                xy: {
                  x: 7.200000,
                  y: 41.099998,
                },
              },
            },
          ],
          image: {
            alpha: 28.200001,
            resolution: {
              x: 89.099998,
              y: 84.199997,
            },
            uri: "consequuntur",
          },
        },
      ],
      pubsubDestination: {
        topic: "harum",
      },
      spriteSheets: [
        {
          columnCount: 7367980966566239874,
          endTimeOffset: "et",
          filePrefix: "aut",
          format: "dolor",
          interval: "animi",
          quality: 3852654797285311642,
          rowCount: 3710639359179144155,
          spriteHeightPixels: 2350620641611697633,
          spriteWidthPixels: 7465609672034484250,
          startTimeOffset: "velit",
          totalCount: 4744398683267899403,
        },
        {
          columnCount: 4693265585069024929,
          endTimeOffset: "neque",
          filePrefix: "qui",
          format: "est",
          interval: "et",
          quality: 8527444148889935096,
          rowCount: 3737846910194129806,
          spriteHeightPixels: 8015391903902252113,
          spriteWidthPixels: 5197845468398624637,
          startTimeOffset: "deleniti",
          totalCount: 5244653917212637213,
        },
        {
          columnCount: 5991508761271416567,
          endTimeOffset: "sed",
          filePrefix: "occaecati",
          format: "qui",
          interval: "aut",
          quality: 7223508839305653133,
          rowCount: 3708959879963337829,
          spriteHeightPixels: 970393771523591801,
          spriteWidthPixels: 6174198661297947669,
          startTimeOffset: "itaque",
          totalCount: 5478790927234200121,
        },
      ],
    },
    name: "nobis",
  },
};

sdk.projects.transcoderProjectsLocationsJobTemplatesCreate(req).then((res: TranscoderProjectsLocationsJobTemplatesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `transcoderProjectsLocationsJobTemplatesCreate` - Creates a job template in the specified region.
* `transcoderProjectsLocationsJobTemplatesDelete` - Deletes a job template.
* `transcoderProjectsLocationsJobTemplatesGet` - Returns the job template data.
* `transcoderProjectsLocationsJobTemplatesList` - Lists job templates in the specified region.
* `transcoderProjectsLocationsJobsCreate` - Creates a job in the specified region.
* `transcoderProjectsLocationsJobsList` - Lists jobs in the specified region.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
